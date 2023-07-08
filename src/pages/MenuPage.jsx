

export const MenuPage = () => {
  return (
    <>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
            <a className="navbar-brand" href="#">Carta</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#scrollspyHeading1">Promo 1</a>
                    </li>
                    <li className="nav-item">
                         <a className="nav-link" href="#scrollspyHeading2">Promo 2</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Rolls</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#scrollspyHeading3">Nigiris</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading4">Avocados</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#scrollspyHeading5">Tempuras</a></li>
                        </ul>
                    </li>
                </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="200px 200px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabIndex="0">
            <h4 id="scrollspyHeading1">Promo Ronin katana</h4>
            <img src="/images/promo1.jpg" className="d-block w-100" alt="promo1"/>
            <p>(40 piezas mixtas)</p>
            <p>Precio :$20.000</p>
            <ul>
                <li>Envuelto en panko: Pollo – queso crema – cebollín</li>
                <li>Envuelto en palta: Camarón – queso crema – palta</li>
                <li>Envuelto en queso crema: salmón – palta</li>
                <li>Envuelto en sésamo: kanikama – palta</li>
            </ul>
            <h4 id="scrollspyHeading2">Promo Ronin kodashi</h4>
            <img src="/images/promo2.jpg" className="d-block w-100" alt="promo2"/>
            <p>(60 piezas mixtas)</p>
            <p>Precio :$28.000</p>
            <ul>
                <li>Rainbow Roll: (camarón tempura, palta, queso crema, envuelto en plaqueta mixta)</li>
                <li>Tori Roll: (camarón, queso crema, cebollín, envuelto en pollo apanado en panko)</li>
                <li>Almond Furai: (pollo, queso crema, almendra, apanado en panko)</li>
                <li>Oriental White: (pepino, lechuga, salmón, palta, envuelto en queso crema. Sin Arroz)</li>
                <li>Tuna Roll: (atún, queso crema, cebollín envuelto en palta)</li>
                <li>Cheese Sake Roll: (queso crema, palta, cebollín, envuelto en salmón)</li>
                
            </ul>
            <h4 id="scrollspyHeading3">Nigiris</h4>
            <img src="/images/nigiri.jpg" className="d-block w-100" alt="nigiri"/>
            <p>(mix 8 piezas)</p>
            <p>Precio :$7.000</p>
            <h4 id="scrollspyHeading4">Avocados</h4>
            <img src="/images/avocado.jpg" className="d-block w-100" alt="avocado"/>
            <p>(8 piezas pollo-queso envuelto en palta)</p>
            <p>Precio :$8.000</p>
            <h4 id="scrollspyHeading5">Tempuras</h4>
            <img src="/images/tempura.jpg" className="d-block w-100" alt="tempura"/>
            <p>(8 piezas pollo teriyaki-queso-nori en tempura )</p>
            <p>Precio :$8.500</p>
        </div>
    </>
  )
}



