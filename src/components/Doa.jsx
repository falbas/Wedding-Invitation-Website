import React from 'react'

class Doa extends React.Component {
  render() {
    return (
      <div
        className={`d-flex justify-content-center bg-primary ${this.props.className}`}
      >
        <div className='col-11 col-md-8 fw-bold text-center text-secondary fs-5'>
          <p className='lh-1'>
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <p>(Q.S Ar Rum: 21)</p>
        </div>
      </div>
    )
  }
}

export default Doa
