import { createElement, render, Component } from "./toy-react";

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1>My Component!</h1>
                { this.children }
            </div>
        );
    }
}

render(
    <MyComponent>
        <div id="a" class="b" xx="c">
            <div>23</div>
            <div>66</div>
            <div>999</div>
            777
        </div>
    </MyComponent>
, document.body);