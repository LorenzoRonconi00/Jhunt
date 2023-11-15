const FooterSearch = () => {
    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg" className="flex flex-row gap-20">
            <path fill="#1F1695" className="z-[-1]">
                <animate attributeName="d" dur="10000ms" repeatCount="indefinite" 
                values="M428,354Q370,458,258,444Q146,430,79,340Q12,250,80,162Q148,74,248.5,76Q349,78,417.5,164Q486,250,428,354Z;
                
                M393,338Q352,426,243.5,437.5Q135,449,72.5,349.5Q10,250,73.5,152.5Q137,55,243.5,65.5Q350,76,392,163Q434,250,393,338Z;
                
                M395.5,328Q340,406,241.5,421Q143,436,78,343Q13,250,76.5,154.5Q140,59,246.5,65Q353,71,402,160.5Q451,250,395.5,328Z;
                
                M428,354Q370,458,258,444Q146,430,79,340Q12,250,80,162Q148,74,248.5,76Q349,78,417.5,164Q486,250,428,354Z;">
                </animate>
            </path>
            <path fill="#fab500" className="left-[500px]">
                <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
                values="M406.5,320.5Q362,391,282,425Q202,459,119.5,406Q37,353,44,253.5Q51,154,127.5,101.5Q204,49,301,57Q398,65,424.5,157.5Q451,250,406.5,320.5Z;">

                </animate>
            </path>
        </svg>
    );
}

export default FooterSearch;