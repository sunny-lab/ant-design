import * as React from 'react';
import { CSSProperties } from 'react';

export interface ProcessProps {
  wordPosition: string;
  width: string;
  processRef: (el: any) => {};
  percent: number;
}

export default class Process extends React.Component<ProcessProps> {
  constructor(props: ProcessProps) {
    super(props);
  }

  render() {
    const wordPosition = this.props.wordPosition || 'top';
    const styles = {
      width: this.props.percent + '%',
      border: this.props.percent === 0 ? 'none' : null,
    } as CSSProperties;
    return <div className="yr-process">
      {wordPosition === 'top' && <div className="process-words top">{this.props.children}</div>}
      <div className="process-line">
        <div
          className="process-total"
          style={{ width: this.props.width }}
          ref={this.props.processRef}
        >
          <div className="process-used" style={styles}/>
        </div>
      </div>
      {wordPosition === 'bottom' && <div className="process-words bottom">{this.props.children}</div>}
    </div>;
  }
}
