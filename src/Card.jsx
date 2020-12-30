import PropTypes from "prop-types";

const Card = ({ weather: {emoji, name, temp, feelsLike, description }  }) => {
  return (
    <div className="card">
      <div className="row no-gutters align-items-center">
        <div className="col-2 h2 pl-1 pt-1 text-center">
          {emoji}
        </div>
        <div className="col-10">
          <div className="card-body">
            <div className="row card-title justify-content-between align-items-center mr-3 mb-1">
              <h4>{name}</h4>
              <h6>
                {temp}c, feels like {feelsLike}c
              </h6>
            </div>
            <div className="row">
              <h5 className="card-subtitle text-muted">
                {description}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  weather: PropTypes.object.isRequired,
};

export default Card;
