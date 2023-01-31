function Resume(){
    return (
        <div className="flex w-100 h-screen">
            <object data="/resume/Aritra Mondal - Resume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Alternative text - include a link <a href="/resume/Aritra Mondal - Resume.pdf">to the PDF!</a></p>
            </object>
        </div>
    );

}

export default Resume;