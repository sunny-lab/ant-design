import get from 'lodash.get';
import * as React from 'react';
import Process from './process';

const converter = require('yan-converter');

export interface OverbookingProps {
  dataSource: object;
}

export interface OverbookingState {
  physicalTotal: number;
  physicalUsed: number;
  virtualTotal: number;
  virtualUsed: number;
  physicalPercent: number;
  virtualPercent: number;
  physicalWidth: number;
  virtualWidth: number;
  overbooking: string;
  unit: string;
}

export default class Overbooking extends React.Component<OverbookingProps, OverbookingState> {
  private timerId: any;
  private listener: any;
  private contentEl: any;
  private physicalEl: HTMLElement;
  private virtualEl: HTMLElement;

  constructor(props: OverbookingProps) {
    super(props);

    this.state = {
      physicalTotal: 0,
      physicalUsed: 0,
      virtualTotal: 0,
      virtualUsed: 0,
      physicalPercent: 0,
      virtualPercent: 0,
      physicalWidth: 0,
      virtualWidth: 0,
      overbooking: '0',
      unit: '',
    };

    if (props.dataSource) {
      this.refresh(props);
    }
  }

  componentWillReceiveProps(props: OverbookingProps) {
    if (props.dataSource) {
      this.refresh(props);
    }
  }

  refresh(props: OverbookingProps) {
    let contentWidth = 0;
    if (this.contentEl) {
      contentWidth = this.contentEl.clientWidth;
    }

    let physicalWidth: number = 0;
    let virtualWidth: number = 0;
    const data = props.dataSource || {};
    const physicalTotal: number = get(data, 'total', 0);
    const physicalUsed: number = get(data, 'used', 0);
    const virtualTotal: number = get(data, 'quota', 0);
    const virtualUsed: number = get(data, 'allocated', 0);
    const unit: string = get(data, 'unit', 'GB');
    let physicalPercent: number = physicalTotal === 0 ? 0 : physicalUsed / physicalTotal * 100;
    let virtualPercent: number = virtualTotal === 0 ? 0 : virtualUsed / virtualTotal * 100;
    const overbooking: string = (physicalTotal === 0 ? 0 : virtualTotal / physicalTotal).toFixed(1);

    if (physicalTotal >= virtualTotal) {
      const percent = virtualTotal / physicalTotal;
      physicalWidth = contentWidth;
      virtualWidth = physicalWidth * percent;
    } else {
      const percent = physicalTotal / virtualTotal;
      virtualWidth = contentWidth;
      physicalWidth = virtualWidth * percent;
    }

    if (physicalPercent > 100) {
      physicalPercent = 100;
    }
    if (virtualPercent > 100) {
      virtualPercent = 100;
    }

    this.setState({
      physicalTotal,
      physicalUsed,
      virtualTotal,
      virtualUsed,
      physicalPercent,
      virtualPercent,
      physicalWidth,
      virtualWidth,
      overbooking,
      unit,
    });
  }

  componentDidMount() {
    this.contentEl = document.getElementById('yr-overbooking');
    this.listener = () => {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }

      this.timerId = setTimeout(() => this.refresh(this.props), 50);
    };
    window.addEventListener('resize', this.listener);
    this.refresh(this.props);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listener);
  }

  getOverbookingStyle(degree: number, triangleWidth: number) {
    if (degree >= 90 || degree <= -90) {
      return { transform: `rotate(0deg)`, right: '10px', top: '6px' };
    } else {
      return { transform: `rotate(${degree}deg)`, right: triangleWidth / 2 - 36 };
    }
  }

  render() {
    const {
      physicalWidth,
      virtualWidth,
    } = this.state;

    const isNoData = physicalWidth === 0 && virtualWidth === 0;

    return <div className="yr-overbooking" id="yr-overbooking">
      {isNoData && <div className="no-data">未获取到超售信息</div>}
      {!isNoData && this.renderOverbooking()}
    </div>;
  }

  renderOverbooking() {
    const {
      physicalTotal,
      physicalUsed,
      virtualTotal,
      virtualUsed,
      physicalPercent,
      virtualPercent,
      physicalWidth,
      virtualWidth,
      overbooking,
      unit,
    } = this.state;

    let minWidth = Math.min(physicalWidth, virtualWidth);

    let triangleType = 'top';
    let triangleWidth = 0;
    let degree = 0;
    if (this.physicalEl && this.virtualEl) {
      triangleWidth = Math.abs(physicalWidth - virtualWidth);
      degree = Math.atan(30 / triangleWidth) * 180 / Math.PI;
      degree = physicalWidth < virtualWidth ? degree : -degree;
      triangleType = physicalWidth > virtualWidth ? 'bottom' : 'top';
    }

    const pUsed = converter.humanConverter(physicalUsed, unit);
    const pTotal = converter.humanConverter(physicalTotal, unit);
    const vUsed = converter.humanConverter(virtualUsed, unit);
    const vTotal = converter.humanConverter(virtualTotal, unit);

    if (minWidth === 0) {
      triangleWidth -= 4;
      minWidth = 4;
    }

    return <span>
        <Process
          processRef={(e: HTMLElement) => this.physicalEl = e}
          width={`${physicalWidth}px`}
          percent={physicalPercent}
          wordPosition="top"
        >
            物理已使用容量/物理总容量：{pUsed.value + pUsed.units}/{pTotal.value + pTotal.units}
        </Process>
        <div className="area">
            <div className="rect-area" style={{ width: `${minWidth}px` }} />
            <div className={`triangle ${triangleType}`}>
                <div
                  className="box line-box"
                  style={{ left: `${minWidth}px`, borderRightWidth: `${triangleWidth}px` }}
                />
                <div
                  className="box blank-box"
                  style={{ left: `${minWidth}px`, borderRightWidth: `${triangleWidth}px` }}
                />
                <div
                  className="box area-box"
                  style={{ left: `${minWidth}px`, borderRightWidth: `${triangleWidth}px` }}
                />
                <div className="text" style={this.getOverbookingStyle(degree, triangleWidth)}>
                    超售比：{overbooking}
                </div>
            </div>
        </div>

        <Process
          processRef={(e: HTMLElement) => this.virtualEl = e}
          width={`${virtualWidth}px`}
          percent={virtualPercent}
          wordPosition="bottom"
        >
            已分配容量/可分配总容量：{vUsed.value + vUsed.units}/{vTotal.value + vTotal.units}
        </Process>
    </span>;
  }
}
