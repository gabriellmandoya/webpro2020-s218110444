import React, { Component, useState } from "react";

// //State, Lifecycle and Event
// class Counter extends Component {
//     state = {
//         number: 0,
//     };

//     componentDidMount(){
//         console.log("Komponen di mount");
//     }

//     componentDidUpdate(){
//         console.log("Komponen di perbaharui");
//     }

//     tambah = () => {
//         this.setState({number: this.state.number + 1});
//     };

//     kurang = () => {
//         this.state.number < 1
//             ? this.setState({number: 0})
//             : this.setState({number: this.state.number - 1});
//     };

//     render(){
//         console.log("Kompunen di render");
//         return(
//             <div>
//                 <p>{this.props.title}</p>
//                 <p>Komponent ini sudah diklik sebanyak {this.state.number} kali</p>
//                 <button onClick={this.tambah}>Tambah</button>
//                 <button onClick={this.kurang}>Kurang</button>
//             </div>
//         );
//     }
// }

// -------------------------------------------------------

//Functional Component (Hooks)
/* 
Kelebihan
    - Kelas diganti function
    - Komponen yang modelnya menggunakan function (Yang sebenarnya function tidak bisa menjadi komponen)
    - State bisa ada didalam function
    - Penggunaan "Functional Component" lebih simple dari pada penggunaan class
Kekurangan
    - Hanya bisa menggunakan "state" dan "componentDidMount"
    - Tidak bisa menggunakan "compoenentDidUpdate" dan "componentDidUnmount"
*/

const Counter = (props) => {
    const [number, setNumber] = useState(0);
    const [title] = useState("Counter");

    const tambah = (params) => {
        setNumber(number + params);
    };

    const kurang = () => {
        number < 1 ? setNumber(0) : setNumber(number - 1);
    }
    return (
        <div>
            <p>{title}</p>
            <p>Komponen ini sudah diklik sebanyak {number} kali</p>
            <button onClick={() => tambah(1)}>Tambah</button>   {/* line: 79 */}
            <button onClick={kurang}>Kurang</button>            {/* line: 80, 81*/}
        </div>
    );
};

//Comments
//---------
//Use "() => tambah (1)" if there is a parameter
//Don't use "() => kurang ()" if there is no parameter 
//Just simply write the function

export default Counter;