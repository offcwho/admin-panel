import './loader.scss'

export default function LoaderSpec() {
    return (
        <div id="loader">
            <div className="shadow"></div>
            <div id="portalcube">
                <div className="squares">
                    <div className="box"></div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="circle">
                    <div className="heart"></div>
                </div>
            </div>
        </div>
    )
}