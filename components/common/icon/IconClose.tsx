export default function IconClose({className}:any) {
    return (
        <svg 
            className={className} 
            viewBox="0 0 24 24" stroke="currentColor" focusable="false" style={{transform: 'rotate(90deg)'}}
        >
            <g transform="translate(12,12)">
                <path d="M-9 -5 L9 -5" fill="none" stroke-width="2" style={{transform: 'rotate(45deg) translate(0, 5px)'}}></path>
                <path d="M-9 0 L9 0" fill="none" stroke-width="2" style={{opacity: 0}}></path>
                <path d="M-9 5 L9 5" fill="none" stroke-width="2" style={{transform: 'rotate(135deg) translate(0, -5px)'}}></path>
            </g>
        </svg>
    );
  }
  