import * as React from 'react';

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
    return <div className="yr-process">
      {wordPosition === 'top' && <div className="process-words top">
        {this.props.children}
      </div>}
      <div className="process-line">
        <div className="process-total"
             style={{width: this.props.width}}
             ref={this.props.processRef}>
          <div className="process-used"
               style={{width: this.props.percent + '%', border: this.props.percent === 0 ? 'none' : null}}/>
        </div>
      </div>
      {wordPosition === 'bottom' && <div className="process-words bottom">
        {this.props.children}
      </div>}
    </div>
  }
}
