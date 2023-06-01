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
    <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />   {/*photo*/}
    <rect x="376" y="41" rx="3" ry="3" width="251" height="50" />     {/*title*/}
    <rect x="376" y="113" rx="3" ry="3" width="102" height="7" />     {/*name prop*/}
    <rect x="518" y="113" rx="3" ry="3" width="102" height="7" />     {/*prop*/}
    <rect x="376" y="137" rx="3" ry="3" width="102" height="7" />     {/*name prop*/}
    <rect x="518" y="137" rx="3" ry="3" width="102" height="7" />     {/*prop*/}
    <rect x="376" y="161" rx="3" ry="3" width="102" height="7" />     {/*name prop*/}
    <rect x="518" y="161" rx="3" ry="3" width="102" height="7" />     {/*prop*/}
    <rect x="376" y="185" rx="3" ry="3" width="102" height="7" />     {/*name prop*/}
    <rect x="518" y="185" rx="3" ry="3" width="102" height="7" />     {/*prop*/}
    <rect x="376" y="209" rx="3" ry="3" width="102" height="7" />     {/*name prop*/}
    <rect x="518" y="209" rx="3" ry="3" width="102" height="7" />     {/*prop*/}
    <rect x="376" y="233" rx="3" ry="3" width="102" height="7" />     {/*name prop*/}
    <rect x="518" y="233" rx="3" ry="3" width="102" height="7" />     {/*prop*/}
    <rect x="376" y="257" rx="3" ry="3" width="102" height="7" />     {/*name prop*/}
    <rect x="518" y="257" rx="3" ry="3" width="102" height="7" />     {/*prop*/}
    <rect x="55" y="300" rx="3" ry="3" width="565" height="7" />      {/*comments*/}
    <rect x="55" y="325" rx="3" ry="3" width="565" height="7" />      {/*comments*/}
    <rect x="55" y="350" rx="3" ry="3" width="265" height="7" />      {/*comments*/}
    <rect x="55" y="475" rx="3" ry="3" width="40" height="7" />       {/*price*/}
    <rect x="120" y="475" rx="3" ry="3" width="50" height="7" />      {/*price amount */}
    <rect x="329" y="458" rx="30" ry="30" width="129" height="40" />  {/*button*/}
    <rect x="488" y="458" rx="30" ry="30" width="129" height="40" />  {/*button*/}
    
  </ContentLoader>
)

