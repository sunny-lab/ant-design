import * as React from 'react';

export interface FicheProps {
  type: string;
  title: React.ReactNode;
  extra: React.ReactNode;
  bottom: React.ReactNode;
  className: string;
  bodyStyle: object;
  style: object;
}

export default class Card extends React.Component<FicheProps> {
  render() {
    const type = this.props.type;
    const title = this.props.title ? <h3 className="yr-card-title">{this.props.title}</h3> : null;
    const extra = this.props.extra ? <span className="yr-card-extra">{this.props.extra}</span> : null;
    const bottom = this.props.bottom ? <div className="yr-card-bottom">{this.props.bottom}</div> : null;

    return <div className={`yr-card ${this.props.className} ${type}`} style={this.props.style}>
      {title}
      {extra}
      <div className="yr-card-content" style={this.props.bodyStyle}>
        {this.props.children}
      </div>
      {bottom}
    </div>;
  }
}
