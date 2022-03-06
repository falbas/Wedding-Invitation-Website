import React from "react";
import "../assets/css/styles.css";
import { Button, CloseButton, Modal } from "react-bootstrap";

class Home extends React.Component {
    state = {
        show: true,
    }

    render() {
        return (
          <div>
              {
              this.state.show ?
              <>
                <Button className="me-2" onClick={() => this.setState({ show: true })}>
                Full screen
                </Button>
                <Modal
                show={this.state.show}
                fullscreen={true}
                onHide={() => this.setState({ show: false })}
                >
                    <div className="modalBackground">
                        <div className="row text-center">
                            <div className="col-12 col-md-12">
                                <img src="https://cdn.discordapp.com/attachments/890238141687009300/949988425656844298/tengah.png" alt="profileWedding"/>
                                <p className="fontName">Intan & Agus</p>
                            </div>
                            <div className="col-12 col-md-12">
                                <span className="normalFont">Kepada Bapak/Ibu/Saudara/i</span>
                                <br />
                                <b className="semiHead">Nama Saudara</b>
                                <p className="normalFont mt-2">Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.</p>
                                <button className="btn btn-primary btn-sm" type="button" onClick={() => this.setState({show: false})}><i className="bi bi-book mx-1"></i> Buka Undangan</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
              : 
              //content
              <p>hello word</p>
              }
          </div>
        );
      }
}

export default (Home);