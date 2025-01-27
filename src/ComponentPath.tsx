import { Link } from "react-router-dom";
import { renderListConfig } from "./config";

const ComponentPath = () => {
  return (
    <div className="container">
      <h1>React machine coding component</h1>
      <p>
        All the components are listed below are the most commonly asked
        questions{" "}
      </p>
      <div className="componentPath">
        <ol className="alternating-colors">
          {renderListConfig?.map((config) => {
            return (
              <li key={config.label}>
                <strong>
                  <Link className="link" to={config.link}>
                    {config.label}
                  </Link>
                </strong>
                <p>{config.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default ComponentPath;
