import React from 'react'

const Info = (props) => {
    //const {challenge} = this.props;
    //console.log(this.props)
    return (
        <div className="card text-center border border-info">
                    <div className="card-header">
                        <h3>Yazma Hızı Testi</h3>
                    </div>
                    <div className="card-body">
                        <p>Alttaki metni kutucuğa girmeye başladığınızda süreniz başlayacaktır.</p>
                        <p>Testi bitirmek için 'ctrl + Enter' kombinasyonunu kullanınız.</p>
                        <p>Ayrıca karakter sınırını aştığınızda test otomatik olarak sonlanacaktır.</p>
                    </div>
                    <div className="card-footer">
                        {props.challenge}
                    </div>
        </div>
    )
}

export default Info;