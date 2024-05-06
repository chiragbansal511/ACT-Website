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

          <tr>
            <td>
              How to use Trello
            </td>
            <td><a href="https://www.youtube.com/watch?v=sC6UwpVEEE0&t=797s">Youtube Video</a></td>
          </tr>

          <tr>
            <td>
              Transdisciplinary Research
            </td>
            <td><a href="https://publications.tno.nl/publication/34640917/PAkH88/TNO-2023-transdisciplinary.pdf">https://publications.tno.nl/</a></td>
          </tr>

        </table>
        
      </div>
    </div>
  );
};
