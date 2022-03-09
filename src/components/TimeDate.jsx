import React from 'react'

class TimeDate extends React.Component {
    render(){
        return(
            <>
                <div className="mt-4 w-50 bg-white shadow rounded mb-4">
                    <div className="d-flex flex-column align-items-center mt-2">
                        <p className="semiHead2">Akad Nikah</p>
                        <p className="semiHead3">Minggu, 05  May 2022</p>
                        <div className="text-center mx-2 text-justify">
                            <span className="normalFont"><i>Pukul 08.00 WIB s/d selesai</i></span>
                            <br />
                            <span className="normalFont"><i>Alamat: <b>GOR Olahraga Sunter</b></i></span>
                            <br /> <br />
                            <p className="normalFont text-justify word-break text-center">
                                <i>Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360</i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-4 pt-4 w-50 bg-white shadow rounded mb-4">
                    <div className="d-flex flex-column align-items-center mt-2">
                        <p className="semiHead2">Resepsi</p>
                        <p className="semiHead3">Minggu, 05  May 2022</p>
                        <div className="text-center mx-2 text-justify">
                            <span className="normalFont"><i>Pukul 08.00 WIB s/d selesai</i></span>
                            <br />
                            <span className="normalFont"><i>Alamat: <b>GOR Olahraga Sunter</b></i></span>
                            <br /> <br />
                            <p className="normalFont text-justify word-break text-center">
                                <i>Jl. Taman Tirta Sunter 1 No.9, RT.8/RW.14, Sunter Jaya, Kec. Tj. Priok, Kota Jkt Utara, Daerah Khusus Ibukota Jakarta 14360</i>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default (TimeDate);