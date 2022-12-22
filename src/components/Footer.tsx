

Footer.propTypes = {

};

function Footer() {
    return (
        <div>
            <footer className="overflow-hidden rounded-b-2xl" style={{ background: "rgb(255, 255, 255)" }}><p
                className="text-center py-6 text-gray-lite  dark:text-gray-700 ">© 2022 All Rights Reserved by <a
                    className="hover:text-[#FA5252] duration-300 transition"
                    target="_blank" rel="noopener noreferrer">Manfred Developer</a>.</p></footer>
        </div>
    );
}

export default Footer;