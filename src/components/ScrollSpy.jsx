import { useEffect } from "react";

export default function ScrollSpy() {

    
    useEffect(() => {
        const sections = document.querySelectorAll("main > .main-content > section");
        const liElements = document.querySelectorAll(".ScrollSpy > ul > li");
                
        sections.forEach((section, i) => {
            const { bottom } = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;

            const sectionBallPosition = bottom - sectionHeight; // buscar otra manera de calcularlo
            liElements[i].style.top = sectionBallPosition.toString() + "px";
        })

    }, [])

    return (
        <div className="ScrollSpy">
            <ul>
                <li>
                    <span>Some of my side projects</span>
                </li>
                <li>
                    <span>Other section</span>
                </li>
            </ul>
        </div>
    )
}