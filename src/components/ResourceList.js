import React from "react";
import useResources from "./useResources";

// const useResources = resource => {
//   const [resources, setResources] = useState([]);
//   const fetchResource = async resource => {
//     const response = await axios.get(
//       `http://jsonplaceholder.typicode.com/${resource}`
//     );
//     setResources(response.data);
//   };
//   useEffect(() => {
//     fetchResource(resource);
//   }, [resource]);

//   useEffect(() => {
//     (async resource => {
//       const response = await axios.get(
//         `http://jsonplaceholder.typicode.com/${resource}`
//       );
//       setResources(response.data);
//     })(resource);
//   }, [resource]);

//   return resources;
// };

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul>
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;

// import React, { Component } from "react";
// import axios from "axios";

// class ResouceList extends Component {
//   state = { resources: [] };

//   async componentDidMount() {
//     const response = await axios.get(
//       `http://jsonplaceholder.typicode.com/${this.props.resource}`
//     );
//     this.setState({ resources: response.data });
//   }

//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `http://jsonplaceholder.typicode.com/${this.props.resource}`
//       );
//       this.setState({ resources: response.data });
//     }
//   }
//   render() {
//     return <div>{this.state.resources.length}</div>;
//   }
// }

// export default ResouceList;
