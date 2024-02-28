const Hello = ({name,messsage}) => {
  console.log({name,messsage});
    return (
      <div>
        <h1>
        {messsage} {name}
        </h1>
      </div>
    );
};
  
  import PropTypes from 'prop-types';
  Hello.propTypes = {
    name: PropTypes.string.isRequired,
    messsage: PropTypes.string.isRequired,
  };
  Hello.defaultProps = {
    name: "User",
    messsage: " "
  }
  
  export default Hello