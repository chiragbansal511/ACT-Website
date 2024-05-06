import React from 'react'
import Main from '../../components/Layout/Layout';

export default function Biblo() {
    return (
        <div>
            <Main
                Heading="Biblography"
                SubHead="Explore cited sources"
                Body={Body()}
            />
        </div>
    )
}

const Body = () => {
    return (
        <div>
            <div className="body">
                <h1>Biblography</h1>

                <p>
                    <ol>
                        <li>Baber, Z. (1995). [Review of The New Production of Knowledge: The Dynamics of Science and
                            Research in Contemporary Societies., by M. Gibbons, C. Limoges, H. Nowotny, S.
                            Schwartzman, P. Scott, &amp; M. Trow]. Contemporary Sociology, 24(6), 751–752.</li>
                            
                            <br />

                        <li>Nowotny H., (2003), &quot;Democratising expertise and socially robust knowledge,&quot; Science and
                            Public Policy, Oxford University Press, vol. 30(3), pages 151-156, June.</li>

                            <br />

                        <li>Christian Pohl C., Gertrude Hirsch Hadorn G., 2007, Principles for Designing Transdisciplinary
                            Research, Proposed by the Swiss Academies of Arts and Sciences, Oekomm</li>

                            <br />

                        <li>Beavis, A., Gibbs, P. (2020). Transdisciplinary Knowledge—An Emergent Concept. In:
                            Contemporary Thinking on Transdisciplinary Knowledge. SpringerBriefs in Education(). Springer,
                            Cham. <a href="https://doi.org/10.1007/978-3-030-39785-2_2" className="genlink">https://doi.org/10.1007/978-3-030-39785-2_2</a></li>
                    </ol>

                </p>
            </div>
        </div>
    )
}

