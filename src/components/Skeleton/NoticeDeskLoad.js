import ContentLoader from 'react-content-loader'

export const NoticeSkeletonDesk = props => (
  <ContentLoader
    width={681}
    height={540}
    viewBox="0 0 681 540"
    backgroundColor="var(--cl-blue-light)"
    foregroundColor="var(--cl-blue-link)" 
    {...props}
  >   

    <rect x="32" y="32" rx="2" ry="2" width="262" height="298" /> 
    <rect x="318" y="32" rx="0" ry="0" width="240" height="38" /> 
    <rect x="318" y="80" rx="0" ry="0" width="170" height="38" /> 
    <rect x="318" y="158" rx="0" ry="0" width="50" height="22" /> 
    <rect x="440" y="158" rx="0" ry="0" width="40" height="22" /> 
    <rect x="318" y="188" rx="0" ry="0" width="70" height="22" /> 
    <rect x="440" y="188" rx="0" ry="0" width="82" height="22" /> 
    <rect x="318" y="218" rx="0" ry="0" width="50" height="22" /> 
    <rect x="440" y="218" rx="0" ry="0" width="82" height="22" /> 
    <rect x="318" y="248" rx="0" ry="0" width="70" height="22" /> 
    <rect x="440" y="248" rx="0" ry="0" width="48" height="22" /> 
    <rect x="318" y="278" rx="0" ry="0" width="50" height="22" /> 
    <rect x="440" y="278" rx="0" ry="0" width="116" height="22" /> 
    <rect x="318" y="308" rx="0" ry="0" width="50" height="22" /> 
    <rect x="440" y="308" rx="0" ry="0" width="116" height="22" /> 
    <rect x="32" y="360" rx="0" ry="0" width="618" height="24" /> 
    <rect x="32" y="390" rx="0" ry="0" width="360" height="24" />
    {/* <rect x="32" y="420" rx="0" ry="0" width="340" height="24" /> */}
    <rect x="375" y="476" rx="20" ry="20" width="129" height="40" /> 
    <rect x="516" y="476" rx="20" ry="20" width="129" height="40" /> 

  </ContentLoader>
)

