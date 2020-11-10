import React from "react";
import {cekTahun, cekHari} from "../utils/waktu";

const Hello = () => {
    return (
        <>
            <p>Tahun dan Hari</p>
            <p>Tahun : {cekTahun}</p>
            <p>Hari : {cekHari}</p>
        </>
    );
};

export default Hello;