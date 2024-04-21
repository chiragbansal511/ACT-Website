import "./Main.css"

export default function Main({Heading = "ABOUT US", Title = "Get to know us better" , Body })
{
    return (
        <div className="main">
          <div className="header">
        <div className="heading">{Heading}</div>
        <div className="title">{Title}</div>
          </div>

          <div>{Body}</div>
        </div>
    )
}