import React from 'react';
import Label from "../label/Label";
import List from "../list/List";
import ActionButton from "../actionButton/ActionButton";
import './ListManager.css';
import ListManagement from "../listManagementButton/ListManagement";

export default class ListManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {tag: 0, text: 'Iron Man', selected: false},
                {tag: 1, text: 'Thor', selected: false},
                {tag: 2, text: 'Ant-Man', selected: false},
                {tag: 3, text: 'Wasp', selected: false},
                {tag: 4, text: 'The Incredible Hulk', selected: false},
                {tag: 5, text: 'Captain America', selected: false},
                {tag: 6, text: 'Hawkeye', selected: false},
                {tag: 7, text: 'Quicksilver', selected: false},
                {tag: 8, text: 'Scarlet Witch', selected: false},
                {tag: 9, text: 'Black Panther', selected: false},
                {tag: 10, text: 'Vision', selected: false},
                {tag: 11, text: 'Black Widow', selected: false},
                {tag: 12, text: 'Mantis', selected: false},
                {tag: 13, text: 'Captain Marvel', selected: false},
                {tag: 14, text: 'War Machine', selected: false},
                {tag: 15, text: 'Spider-Man', selected: false},
                {tag: 16, text: 'Doctor Strange', selected: false},
                {tag: 17, text: 'Falcon', selected: false},
                {tag: 18, text: 'Gamora', selected: false},
                {tag: 19, text: 'Star Lord', selected: false},
                {tag: 20, text: 'Rocket', selected: false},
                {tag: 21, text: 'Drax', selected: false},
                {tag: 22, text: 'Groot', selected: false},
                {tag: 23, text: 'Nebula', selected: false}
            ],
            shuffledItems: [],
            deleteDisabled: true
        }
    }

    addItem = (newItem) => {
        const nextTag = (Date.now()).toString(36);
        this.setState((ps) => ({items: [...ps.items, {tag: nextTag, text: newItem, selected: false}]}));
    };

    deleteItems = () => {
        const newItems = this.state.items.filter(i => i.selected === false);
        this.setState({items: newItems});
    };

    // Fisher-Yates shuffle: http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    // see also: http://www.i-programmer.info/programming/theory/2744-how-not-to-shuffle-the-kunth-fisher-yates-algorithm.html
    fisherYates = (list) => {
        const shuffled = Array.from(list, i => Object.assign({}, i)); // list.slice(0);
        const length = shuffled.length - 1;
        for (var index = length; index > 0; index--) {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            const current = shuffled[index];
            shuffled[index] = shuffled[randomIndex];
            shuffled[randomIndex] = current;
        }
        return shuffled;
    };

    reset = () => {
        this.setState({shuffledItems: []});
        this.state.items.forEach(i => i.selected = false);
    };

    selectOne = () => {
        const length = this.state.shuffledItems.length;
        if(length > 0) {
            const updatedItems = Array.from(this.state.shuffledItems);
            updatedItems.forEach(i => i.selected = false);
            var selectedIndex = Math.floor((Math.random() * length));
            this.toggleSelectedAt(updatedItems, selectedIndex);
            this.setState({shuffledItems: updatedItems});
        }
    };

    shuffle = () => {
        if(this.state.items.length > 0) {
            const shuffled = this.fisherYates(this.state.items);
            shuffled.forEach(i => i.selected = false);
            this.setState({shuffledItems: shuffled});
        }
    };

    shuffleAndSelect = () => {
        new Promise((resolve) => {
            this.shuffle();
            resolve();
        }).then(() => this.selectOne())
    };

    sourceItemClicked = (item) => {
        const updatedItems = Array.from(this.state.items); // this.state.items.splice(0);
        const selectedIndex = updatedItems.findIndex(i => i.tag === item.tag);
        this.toggleSelectedAt(updatedItems, selectedIndex);
        this.setState({items: updatedItems, deleteDisabled: !updatedItems.some(i => i.selected)});
    };

    toggleSelectedAt = (items, index) => {
        const updatedItem = items[index];
        updatedItem.selected = !updatedItem.selected;
        items.splice(index, 1, updatedItem);
        return items;
    };

    render = () => {
        return (
            <div className='list-manager'>
                <div className='source-list-label'>
                    <Label text='Source List' />
                </div>
                <div className='list-item-management'>
                    <ListManagement
                        addItem={this.addItem}
                        deleteDisabled={this.state.deleteDisabled}
                        deleteItems={this.deleteItems}
                    />
                </div>
                <div className='source-list'>
                    <List
                        itemClicked={this.sourceItemClicked}
                        items={this.state.items}/>
                </div>

                <div className='shuffle-button'>
                    <ActionButton text='Shuffle' clickHandler={() => this.shuffle()}/>
                </div>
                <div className='select-button'>
                    <ActionButton text='Select' clickHandler={() => this.selectOne()}/>
                </div>
                <div className='shuffle-select-button'>
                    <ActionButton text='Shuffle / Select' clickHandler={() => this.shuffleAndSelect()}/>
                </div>
                <div className='reset-button'>
                    <ActionButton text='Reset' clickHandler={() => this.reset()}/>
                </div>

                <div className='shuffled-list-label'>
                    <Label text='Shuffled List' />
                </div>
                <div className='shuffled-list'>
                    <List items={this.state.shuffledItems}/>
                </div>
            </div>
        );
    }
}
