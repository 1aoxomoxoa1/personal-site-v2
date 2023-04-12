import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../../css/tooltip.css';

function IconWithTooltip({name, src}) {
  
    const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} className='custom-tool'>
        {name}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
       <img src={src} alt={name} className='tooltip-pic'/>
    </OverlayTrigger>
  );
}

export default IconWithTooltip;