import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    render() {
        //xay dung menu tu props menu - moi dish tao ra 1 thanh phan tren giao dieen
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={ () => this.onDishSelect(dish) }>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })

        return (
            <div className='container'>
                <div className='row'>
                    {menu}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.state.selectDish)}
                </div>
            </div>
        )
    }
}

export default Menu;