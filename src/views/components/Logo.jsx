import React from 'react';
import SVGFactory from '../components/SVG';
var SVG;

const _WIDTH = 55;
const _TOP_LEFT = 10;
const _BOTTOM_LEFT = 5;

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._play = this._play.bind(this);
    this._alter = this._alter.bind(this);
    this._maskID = 'mask' + props.random();
    this._alterAmount = 1;
    this.alterAmount = this.alterAmount.bind(this);
  }

  render() {
    return (
      <SVG className='Logo SVG-icon' fill='#231f20' width={_WIDTH} fallbackIcon='icon-logo'>
        <defs>
          <clipPath id={this._maskID}>
            <polyline ref='mask' points={'0,0 ' + _WIDTH + ',0 ' + _WIDTH + ',' + SVG.ICON_SIZE + ' 0,' + SVG.ICON_SIZE}/>
          </clipPath>
        </defs>
        <g ref='logo' clipPath={'url(#' + this._maskID + ')'}>
          <path ref='r' d='M7.775846,7.688243L6.350275,7.688236c-1.803006,0-3.207442,0.571869-4.232949,1.471473 C1.652312,8.505315,0.889843,8.077036,0.025921,8.077036H0v6.091071v4.276723v0.085184 c0,0.690281,0.520913,1.293007,1.209755,1.337589c0.754796,0.048843,1.382193-0.548954,1.382193-1.293182V18.44483v-4.924709 c0-1.792525,1.455693-3.245054,3.24942-3.239921c1.069843,0.003061,1.934477-0.873335,1.934477-1.943186V7.688243z'/>
          <path ref='e' d='M12.894945,7.688243c-3.037061,0-5.507891,2.365154-5.507891,6.155879S9.857884,20,12.894945,20 c2.018252,0,3.785393-1.045481,4.744591-2.858721l-0.781158-0.400951c-0.727886-0.373611-1.608143-0.247124-2.210545,0.30652 c-0.488197,0.448696-1.095432,0.685196-1.752888,0.685196c-1.383523,0-2.544205-1.047577-2.841422-2.915941h5.682844h0.981702 h0.366779c0.73601,0,1.323374-0.612582,1.295073-1.348046c-0.015022-0.390367-0.047705-0.72579-0.080341-0.924236 C17.802254,9.520279,15.5679,7.688243,12.894945,7.688243z M12.894945,9.956199c1.284417,0,2.376718,0.902989,2.764537,2.52715 h-5.529074C10.518228,10.859188,11.610527,9.956199,12.894945,9.956199z'/>
          <path ref='d' d='M27.474657,4.422387v3.95004c-0.788351-0.44557-1.69384-0.684184-2.656748-0.684184 c-3.03706,0-5.507891,2.365154-5.507891,6.155879S21.780849,20,24.817909,20c1.03133,0,1.996847-0.2736,2.822992-0.782307 c0.220278,0.389393,0.637466,0.65271,1.116772,0.65271h0.025913c0.708595,0,1.283018-0.574425,1.283018-1.283018V1.856359h-0.025921 C28.623505,1.856359,27.474657,3.005207,27.474657,4.422387z M24.817909,17.732044c-1.607882,0-2.915943-1.413794-2.915943-3.887922 c0-2.474137,1.308062-3.887923,2.915943-3.887923s2.915941,1.413786,2.915941,3.887923 C27.73385,16.318251,26.425791,17.732044,24.817909,17.732044z'/>
          <path ref='d2' d='M39.397621,4.422387v3.95004c-0.788349-0.44557-1.69384-0.684184-2.65675-0.684184 c-3.03706,0-5.507889,2.365154-5.507889,6.155879S33.703812,20,36.740871,20c1.03133,0,1.996849-0.2736,2.822994-0.782307 c0.220276,0.389393,0.637466,0.65271,1.116772,0.65271h0.025913c0.708595,0,1.28302-0.574425,1.28302-1.283018V1.856359H41.96365 C40.546471,1.856359,39.397621,3.005207,39.397621,4.422387z M36.740871,17.732044c-1.60788,0-2.915939-1.413794-2.915939-3.887922 c0-2.474137,1.30806-3.887923,2.915939-3.887923c1.607883,0,2.915943,1.413786,2.915943,3.887923 C39.656815,16.318251,38.348755,17.732044,36.740871,17.732044z'/>
          <path ref='i' d='M44.063129,10.254272v8.320157c0,0.744284,0.627556,1.342106,1.382351,1.293165 c0.688778-0.044659,1.209595-0.647385,1.209595-1.33762V7.688243h-0.025921 C45.211975,7.688243,44.063129,8.837092,44.063129,10.254272z'/>
          <circle fill='#f04923' cx='45.391502' cy='4.675103' r='2.105958'/>
          <path ref='t' d='M52.703831,7.688243V5.472123c0-0.708586-0.574425-1.28301-1.28302-1.28301h-0.025913 c-0.708591,0-1.283016,0.574424-1.283016,1.28301v2.216121h-1.006119c-0.63773,0-1.154713,0.516982-1.154713,1.15471V8.86628 c0,0.637736,0.516983,1.154717,1.154713,1.154717h1.006119l-0.000008,8.566388c0,0.708593,0.574425,1.283018,1.283016,1.283018 h0.025921c0.708588,0,1.283012-0.574425,1.283012-1.283018l0.000008-8.56706C53.973125,10.013103,55,8.982557,55,7.71157V7.688243 H52.703831z'/>
        </g>
      </SVG>
    );
  }

  componentDidMount() {
    if (!SVG.ENABLED) {
      return;
    }
    this.refs.logo.getDOMNode().setAttribute('clip-path', 'url(#' + this._maskID + ')');
    if (this.props.played) {
      this._play(true, true);
    }
    if (this.props.altered) {
      this._alter(true, true);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!SVG.ENABLED) {
      return;
    }
    var played = nextProps.played;
    if (typeof played !== 'undefined' && played !== this.props.played) {
      this._play(played);
    }
    var altered = nextProps.altered;
    if (typeof altered !== 'undefined' && altered !== this.props.altered) {
      this._alter(altered);
    }
  }

  _play(bool, instant) {
    // TODO
  }

  _alter(bool, instant) {
    TweenLite.to(this, instant ? 0 : 0.2, {alterAmount: bool ? 0 : 1});
  }

  alterAmount(num) {
    if (typeof num === 'undefined') {
      return this._alterAmount;
    } else if (this._alterAmount !== num) {
      this._alterAmount = num;
      this.refs.mask.getDOMNode().setAttribute('points', '0,0 ' + ((_WIDTH - _TOP_LEFT) * this._alterAmount + _TOP_LEFT) + ',0 ' + ((_WIDTH - _BOTTOM_LEFT) * this._alterAmount + _BOTTOM_LEFT) + ',' + SVG.ICON_SIZE + ' 0,' + SVG.ICON_SIZE);
    }
  }
}

Logo.defaultProps = {
  played: false,
  altered: false,
};

function LogoFactory(app) {
  SVG = SVGFactory(app);
  return app.mutate('core/components/Logo', Logo);
}

export default LogoFactory;
