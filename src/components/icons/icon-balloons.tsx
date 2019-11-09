import * as React from "react"

type Props = {
  color?: string
  children?: never
}

export const IconBalloons: React.FunctionComponent<Props> = ({ color = "whitesmoke" }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      strokeMiterlimit={"1.41421"}
    >
      <clipPath id="_clip1">
        <rect id="birthday_icon" x="0" y="0" width="800" height="800" />
      </clipPath>
      <g clipPath="url(#_clip1)">
        <path
          d="M325,585.494c0,0 -1.43,127.116 -112,186.506c-110.57,59.39 -111,59 -111,59"
          fill={"none"}
          stroke={color}
          strokeWidth={"6px"}
        />
        <path
          d="M500,687.963c0,0 -1.43,127.116 -112,186.506c-110.57,59.39 -111,59 -111,59"
          fill={"none"}
          stroke={color}
          strokeWidth={"6px"}
        />
        <g>
          <g>
            <ellipse cx="500" cy="469.444" rx="150" ry="200" fill={color} />
            <path d="M500,658.333l22.222,44.445l-44.444,0l22.222,-44.445Z" fill={color} />
          </g>
          <g>
            <path d="M325,550.926l25.926,51.852l-51.852,0l25.926,-51.852Z" fill={color} />
            <ellipse cx="325" cy="330.556" rx="175" ry="233.333" fill={color} />
          </g>
        </g>
      </g>
    </svg>
  )
}
