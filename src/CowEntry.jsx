var CowListEntry = ({}) =>
  (
  <div class = "cowEntry">
    <div class = "cowEntry-left">{cow.name}</div>
    <div class = "cowEntry-right">{cow.description}</div>
  </div>
  )

CowEntry.propTypes = {
  cow: React.PropTypes.object.isRequired
};

export default CowListEntry;