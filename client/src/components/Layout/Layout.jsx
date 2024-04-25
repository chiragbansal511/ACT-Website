import "./Layout.css"

export default function Main(prop)
{
    return (
        <div className="main">
          <div className="header">
            <h1 className="heading">{prop.Heading}</h1>
            <h3 className="subHead">{prop.SubHead}</h3>
          </div>

          <>
            {prop.Body}
          </>

        </div>
    )
}