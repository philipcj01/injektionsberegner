const Footer = ({ company = "Store Havelse Dyreklinik", year = new Date().getFullYear() }) => {
    return (
        <footer style={styles.footer} role="contentinfo">
            <div style={styles.inner}>
                <div style={styles.brand}>
                    <span style={styles.company}>{company}</span>
                    <span style={styles.sep}>·</span>
                    <small style={styles.small}>Injektionsberegner</small>
                </div>

                <nav aria-label="Footer" style={styles.nav}>
                    <a href="/" style={styles.link}>Forside</a>
                    <a href="mailto:philip.c.juhl@gmail.com" style={styles.link}>Forbedringsønsker</a>
                    <a
                        href="https://github.com/philipcj01"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        GitHub
                    </a>
                </nav>

                <div style={styles.copy}>
                    © {year} {company}. Alle rettigheder forbeholdes.
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        boxSizing: "border-box",
        background: "#f7f7f7",
        borderTop: "1px solid #e1e1e1",
        padding: "16px 12px",
        fontSize: "13px",
        color: "#444",
        zIndex: 1000,
    },
    inner: {
        maxWidth: 980,
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
    },
    brand: {
        display: "flex",
        alignItems: "center",
        gap: 8,
    },
    company: {
        fontWeight: 600,
    },
    sep: {
        color: "#bbb",
    },
    small: {
        color: "#666",
    },
    nav: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
    },
    link: {
        color: "#0366d6",
        textDecoration: "none",
    },
    copy: {
        color: "#777",
        marginLeft: "auto",
    },
};

export default Footer;