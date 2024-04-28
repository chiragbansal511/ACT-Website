import Main from "../../components/Layout/Layout";

export default function Resources() {
  return (
    <div>
      <Main
        Heading="Resources"
        SubHead="Get to know us better"
        Body={Body()}
      />
    </div>
  );
}

const Body = () => {
  return (
    <div>
      <div className="body">

        <h1>Our Resources</h1>

        <table border="10" className="eval">
          <tr>
            <th>Resource</th>
            <th>Link</th>
          </tr>
          <tr>
            <td>
                Network for Transdisciplinary research
            </td>
            <td>
                <a href="https://transdisciplinarity.ch/en">https://transdisciplinarity.ch/en</a>
            </td>
          </tr>

          <tr>
            <td>
              Trello (Project Management Tool)
            </td>
            <td><a href="https://trello.com/">https://trello.com/</a></td>
          </tr>

        </table>
        
      </div>
    </div>
  );
};
