import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';



export default function ToDoList() {
    const [inputValue, setInputValue] = useState();
    const [valuesForList, setValuesForList] = useState([
        {id: 1, text: "Item 1"},
        {id: 2, text: "Item 2"},
    ]);
    console.log(valuesForList);

    function handleInputChange(event) {
        const value = event.target.value;
        setInputValue(value);
    }

    const deleteFromList = (idItem) => {
        setValuesForList(valuesForList.filter(value => value.id !== idItem));
    }

    function handleSubmit() {
        const newObjectValue =
            {
                id: valuesForList.length + 1,
                text: inputValue,
            }
        setValuesForList([...valuesForList, newObjectValue]);
        setInputValue('');
    }
        return (
            <div className="toDoList_container">
                <h2>Список задач</h2>
                <TextField id="filled-basic" label="Введите задачу" variant="filled" value={inputValue}
                           onChange={handleInputChange}/>
                <Button className="toDoList_button" variant="outlined" onClick={handleSubmit}>Добавить</Button>
                <VirtualizedList/>
            </div>
        );

    function renderRow(props) {
        const {index, style} = props;
        const item = valuesForList[index];

        return (
            <ListItem style={style} key={item.id} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={item.text}/>
                    <DeleteOutlinedIcon  onClick={() => deleteFromList(item.id)}/>
                </ListItemButton>
            </ListItem>
        );
    }

    function VirtualizedList() {
        return (
            <Box
                sx={{width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper'}}
            >
                <FixedSizeList
                    height={400}
                    width={360}
                    itemSize={46}
                    itemCount={valuesForList.length}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
        );
    }
}