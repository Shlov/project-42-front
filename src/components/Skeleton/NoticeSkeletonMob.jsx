import ContentLoader from 'react-content-loader'

export const NoticeSkeletonMob = props => (
  <ContentLoader
    width={270}
    height={580}
    viewBox="0 0 280 580"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >   
    <rect x="24" y="33" rx="16" ry="16" width="240" height="230" />   {/*photo */}
    <rect x="18" y="275" rx="3" ry="3" width="198" height="50" />     {/*title*/}
    <rect x="18" y="342" rx="3" ry="3" width="90" height="7" />    {/* name prop*/}
    <rect x="122" y="342" rx="3" ry="3" width="90" height="7" />    {/* prop*/}
    <rect x="18" y="366" rx="3" ry="3" width="90" height="7" />    {/* name prop*/}
    <rect x="122" y="366" rx="3" ry="3" width="90" height="7" />    {/* prop*/}
    <rect x="18" y="390" rx="3" ry="3" width="90" height="7" />    {/* name prop*/}
    <rect x="122" y="390" rx="3" ry="3" width="90" height="7" />    {/* prop*/}
    <rect x="18" y="413" rx="3" ry="3" width="90" height="7" />    {/* name prop*/}
    <rect x="122" y="413" rx="3" ry="3" width="90" height="7" />    {/* prop*/}
    <rect x="18" y="437" rx="3" ry="3" width="90" height="7" />    {/* name prop*/}
    <rect x="122" y="437" rx="3" ry="3" width="90" height="7" />    {/* prop*/}
    <rect x="18" y="461" rx="3" ry="3" width="90" height="7" />    {/* name prop*/}
    <rect x="122" y="461" rx="3" ry="3" width="90" height="7" />    {/* prop*/}
    <rect x="18" y="488" rx="30" ry="30" width="255" height="40" />  {/*button */}
    <rect x="18" y="538" rx="30" ry="30" width="255" height="40" />  {/*button */} 
    
  </ContentLoader>
)

