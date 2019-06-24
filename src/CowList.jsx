import CowEntry from './CowEntry.js';

  var CowList = ({}) =>
  (
    <div className = 'CowList'>
      {cows.map((cow)=>
        <CowEntry
        />)}
    </div>
  )
CowList.propTypes = {
  cows: React.PropTypes.array.isRequired
}

export default CowList;