import React from "react"
import ContentLoader from "react-content-loader"

export const NoticeLoadMob = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={456}
    viewBox="0 0 280 456"
    backgroundColor="var(--cl-blue-light)"
    foregroundColor="var(--cl-blue-link)" 
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="280" height="288" /> 
    <rect x="20" y="308" rx="0" ry="0" width="240" height="32" /> 
    <rect x="20" y="348" rx="0" ry="0" width="170" height="32" /> 
    <rect x="20" y="392" rx="20" ry="20" width="248" height="38" />
  </ContentLoader>
)

export const NoticeLoadTab = (props) => (
  <ContentLoader 
    speed={2}
    width={336}
    height={456}
    viewBox="0 0 336 456"
    backgroundColor="var(--cl-blue-light)"
    foregroundColor="var(--cl-blue-link)" 
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="336" height="288" /> 
    <rect x="20" y="308" rx="0" ry="0" width="280" height="32" /> 
    <rect x="20" y="348" rx="0" ry="0" width="200" height="32" /> 
    <rect x="44" y="392" rx="20" ry="20" width="248" height="38" />
  </ContentLoader>
)

export const NoticeLoadDesk = (props) => (
  <ContentLoader 
    speed={2}
    width={288}
    height={456}
    viewBox="0 0 288 456"
    backgroundColor="var(--cl-blue-light)"
    foregroundColor="var(--cl-blue-link)" 
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="288" height="288" /> 
    <rect x="20" y="308" rx="0" ry="0" width="240" height="32" /> 
    <rect x="20" y="348" rx="0" ry="0" width="170" height="32" /> 
    <rect x="20" y="392" rx="20" ry="20" width="248" height="38" />
  </ContentLoader>
)

// export default MyLoader

