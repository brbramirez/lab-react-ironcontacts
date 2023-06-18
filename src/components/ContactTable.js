function ContactTable({ picture, name, popularity }) {
    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{picture}</td>
            <td>{name}</td>
            <td>{popularity}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  export default ContactTable;