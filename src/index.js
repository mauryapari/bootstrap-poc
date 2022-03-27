import 'bootstrap';
import './scss/main.scss';
import './scripts/table';

function removeColOnClick(type, id) {
   document.querySelector('body').addEventListener('click',(e)=> {
      if(e.target.matches(`.btn-remove-col[data-col-id="${id}"]`)) {
         const localData = JSON.parse(localStorage.getItem('columns') || `{}`);
         let colTypeArr = localData[type] || [];
         let itemIndex = colTypeArr.findIndex(item => {
            return item.id === id
         });
         colTypeArr.splice(itemIndex, 1);
         e.target.closest(`.multifield .row#${id}`).remove();
         localData[type] = colTypeArr;
         localStorage.setItem('columns', JSON.stringify(localData));
      }
   })
}

function addRowClasses(e) {
   let rowLocalData = localStorage.getItem('rows') || '';
   let searchVal = e.target.value.split('-')[0];
   if(rowLocalData.indexOf(searchVal)) {
   } else {
      rowLocalData += `${e.target.value} `;
   }
   localStorage.setItem('rows', rowLocalData);
}

function addSelectedItem(type, id) {
   let localData = JSON.parse(localStorage.getItem('columns') || `{}`);
   let colTypeArr = localData[type] || [];
   let obj = {
      width: 'col-auto',
      offset: '',
      order: '',
      id: id
   }
   colTypeArr.push(obj);
   localData[type] = colTypeArr;
   localStorage.setItem('columns', JSON.stringify(localData));
}

function listenerOnSelect(type,id) {
   const reg = new RegExp('[a-zA-Z]+([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[eE]([+-]?\d+))?');
   document.querySelector('body').addEventListener('change',(e)=> {
      if(e.target && e.target.id && reg.test(e.target.id)) {
         const localData = JSON.parse(localStorage.getItem('columns') || `{}`);
         let colTypeArr = localData[type] || [];
         const targetType = e.target.dataset.type;
         const targetPanel = e.target.dataset.panelName;
         let itemIndex = colTypeArr.findIndex(item => {
            return item.id === id
         });
         console.log(localData, colTypeArr, targetType, itemIndex, targetPanel);
         let obj = {...colTypeArr[itemIndex]};
         obj[targetType] = e.target.value;
         colTypeArr.splice(itemIndex, 1, obj);
         localData[type] = colTypeArr;
         localStorage.setItem('columns', JSON.stringify(localData));
      }
   })
}

function addColumnInModal(type) {
   let ranId = Math.floor(1000 + Math.random() * 9000);
   const multifieldDiv = document.querySelector(`.${type}-multifield`);
   const content = `
      <div class="row" id="column${ranId}">
         <div class="input-group input-group__lower-border col-10 flex-column">
            <div class="mt-3">
               <label class="input-group-text input-group-text__no-background" for="columnWidth${ranId}">Column Width</label>
               <select class="form-select" id="columnWidth${ranId}" data-type="width" data-panel-name="${type}">
                  <option selected value="${type === 'xs' ? 'col-auto' : `col-${type}-auto`}">Auto (Default)</option>
                  <option value="${type === 'xs' ? 'col-1' : `col-${type}-1`}">${type === 'xs' ? 'col-1' : `col-${type}-1`}</option>
                  <option value="${type === 'xs' ? 'col-2' : `col-${type}-2`}">${type === 'xs' ? 'col-2' : `col-${type}-2`}</option>
                  <option value="${type === 'xs' ? 'col-3' : `col-${type}-3`}">${type === 'xs' ? 'col-3' : `col-${type}-3`}</option>
                  <option value="${type === 'xs' ? 'col-4' : `col-${type}-4`}">${type === 'xs' ? 'col-4' : `col-${type}-4`}</option>
                  <option value="${type === 'xs' ? 'col-5' : `col-${type}-5`}">${type === 'xs' ? 'col-5' : `col-${type}-5`}</option>
                  <option value="${type === 'xs' ? 'col-6' : `col-${type}-6`}">${type === 'xs' ? 'col-6' : `col-${type}-6`}</option>
                  <option value="${type === 'xs' ? 'col-7' : `col-${type}-7`}">${type === 'xs' ? 'col-7' : `col-${type}-7`}</option>
                  <option value="${type === 'xs' ? 'col-8' : `col-${type}-8`}">${type === 'xs' ? 'col-8' : `col-${type}-8`}</option>
                  <option value="${type === 'xs' ? 'col-9' : `col-${type}-9`}">${type === 'xs' ? 'col-9' : `col-${type}-9`}</option>
                  <option value="${type === 'xs' ? 'col-10' : `col-${type}-10`}">${type === 'xs' ? 'col-10' : `col-${type}-10`}</option>
                  <option value="${type === 'xs' ? 'col-11' : `col-${type}-11`}">${type === 'xs' ? 'col-11' : `col-${type}-11`}</option>
                  <option value="${type === 'xs' ? 'col-12' : `col-${type}-12`}">${type === 'xs' ? 'col-12' : `col-${type}-12`}</option>
               </select>
            </div>
            <div class="mt-3">
               <label class="input-group-text input-group-text__no-background" for="columnOffset${ranId}">Column Offset</label>
               <select class="form-select" id="columnOffset${ranId}" data-type="offset" data-panel-name="${type}">
                  <option selected value="">None (Default)</option>
                  <option value="${type === 'xs' ? 'offset-0' : `offset-${type}-0`}">Reset</option>
                  <option value="${type === 'xs' ? 'offset-1' : `offset-${type}-1`}">${type === 'xs' ? 'offset-1' : `offset-${type}-1`}</option>
                  <option value="${type === 'xs' ? 'offset-2' : `offset-${type}-2`}">${type === 'xs' ? 'offset-2' : `offset-${type}-2`}</option>
                  <option value="${type === 'xs' ? 'offset-3' : `offset-${type}-3`}">${type === 'xs' ? 'offset-3' : `offset-${type}-3`}</option>
                  <option value="${type === 'xs' ? 'offset-4' : `offset-${type}-4`}">${type === 'xs' ? 'offset-4' : `offset-${type}-4`}</option>
                  <option value="${type === 'xs' ? 'offset-5' : `offset-${type}-5`}">${type === 'xs' ? 'offset-5' : `offset-${type}-5`}</option>
                  <option value="${type === 'xs' ? 'offset-6' : `offset-${type}-6`}">${type === 'xs' ? 'offset-6' : `offset-${type}-6`}</option>
                  <option value="${type === 'xs' ? 'offset-7' : `offset-${type}-7`}">${type === 'xs' ? 'offset-7' : `offset-${type}-7`}</option>
                  <option value="${type === 'xs' ? 'offset-8' : `offset-${type}-8`}">${type === 'xs' ? 'offset-8' : `offset-${type}-8`}</option>
                  <option value="${type === 'xs' ? 'offset-9' : `offset-${type}-9`}">${type === 'xs' ? 'offset-9' : `offset-${type}-9`}</option>
                  <option value="${type === 'xs' ? 'offset-10' : `offset-${type}-10`}">${type === 'xs' ? 'offset-10' : `offset-${type}-10`}</option>
                  <option value="${type === 'xs' ? 'offset-11' : `offset-${type}-11`}">${type === 'xs' ? 'offset-11' : `offset-${type}-11`}</option>
                  <option value="${type === 'xs' ? 'offset-12' : `offset-${type}-12`}">${type === 'xs' ? 'offset-12' : `offset-${type}-12`}</option>
               </select>
            </div>
            <div class="mt-3">
               <label class="input-group-text input-group-text__no-background" for="columnOrder${ranId}">Column Order</label>
               <select class="form-select" id="columnOrder${ranId}" data-type="order" data-panel-name="${type}">
                  <option selected value="">Default</option>
                  <option value="${type === 'xs' ? 'order-1' : `order-${type}-1`}">${type === 'xs' ? 'order-1' : `order-${type}-1`}</option>
                  <option value="${type === 'xs' ? 'order-2' : `order-${type}-2`}">${type === 'xs' ? 'order-2' : `order-${type}-2`}</option>
                  <option value="${type === 'xs' ? 'order-3' : `order-${type}-3`}">${type === 'xs' ? 'order-3' : `order-${type}-3`}</option>
                  <option value="${type === 'xs' ? 'order-4' : `order-${type}-4`}">${type === 'xs' ? 'order-4' : `order-${type}-4`}</option>
                  <option value="${type === 'xs' ? 'order-5' : `order-${type}-5`}">${type === 'xs' ? 'order-5' : `order-${type}-5`}</option>
                  <option value="${type === 'xs' ? 'order-6' : `order-${type}-6`}">${type === 'xs' ? 'order-6' : `order-${type}-6`}</option>
                  <option value="${type === 'xs' ? 'order-7' : `order-${type}-7`}">${type === 'xs' ? 'order-7' : `order-${type}-7`}</option>
                  <option value="${type === 'xs' ? 'order-8' : `order-${type}-8`}">${type === 'xs' ? 'order-8' : `order-${type}-8`}</option>
                  <option value="${type === 'xs' ? 'order-9' : `order-${type}-9`}">${type === 'xs' ? 'order-9' : `order-${type}-9`}</option>
                  <option value="${type === 'xs' ? 'order-10' : `order-${type}-10`}">${type === 'xs' ? 'order-10' : `order-${type}-10`}</option>
                  <option value="${type === 'xs' ? 'order-11' : `order-${type}-11`}">${type === 'xs' ? 'order-11' : `order-${type}-11`}</option>
                  <option value="${type === 'xs' ? 'order-12' : `order-${type}-12`}">${type === 'xs' ? 'order-12' : `order-${type}-12`}</option>
               </select>
            </div>
         </div>
         <div class="col-2">
            <button class="btn btn-remove-col mt-3" type="button" data-col-id="column${ranId}">Delete</button>
         </div>
      </div>`;
   multifieldDiv.innerHTML += content;
   removeColOnClick(type,`column${ranId}`);
   addSelectedItem(type, ranId);
   listenerOnSelect(type,ranId);
}

function addColumn(col) {
   const {id, ...properties} = col;
   const classes = Object.values(properties).reduce((classes, item) => `${classes} ${item}`,' ');
   return classes;
}

function createGrid() {
   let localData = JSON.parse(localStorage.getItem('columns') || `{}`);
   let rowClasses = localStorage.getItem('rows') || '';
   let columnList = [];
   for(let device in localData) {
      let colPerDevice = localData[device];
      for(let i=0; i<colPerDevice.length; i++) {
         columnList[i] = (columnList[i] || '') + addColumn(colPerDevice[i]);
      }
   }
   let columnContent = '';
   for(let i in columnList) {
      columnContent += `<div class="${columnList[i]} my-2 column-highlight"><p>Flex Item</p></div>`
   }
   let content = `<div class="row row-highlight ${rowClasses}">${columnContent}</div>`
   const multifieldDiv = document.querySelector('#bootstrap-grid');
   multifieldDiv.innerHTML = content;
}

window.addEventListener('load', ()=> {
   localStorage.removeItem('columns'); 
   localStorage.removeItem('rows'); 
   const multifieldBtn = document.querySelectorAll('.tab-pane .btn-primary');
   multifieldBtn.forEach(item => {
      item.addEventListener('click', (e)=> {
         let type = item?.dataset?.tabType
         addColumnInModal(type);
      })
   });
   const rowSelectItems = document.querySelectorAll('#gridTabContent .input-group .form-select');
   rowSelectItems.forEach(item=> {
         item.addEventListener('change', (e)=> {
         addRowClasses(e);
      })
   });
   const modalSaveChangeBtn = document.querySelector('#gridModal .modal-footer .btn-primary');
   if(modalSaveChangeBtn) {
      modalSaveChangeBtn.addEventListener('click', createGrid);
   }
   
   const navBtn = document.querySelector('.navbar-container .navbar-container__button');
   navBtn.addEventListener('click',(e)=> {
      console.log('working');
      const element = document.querySelector('#content');
      element.classList.toggle('no-margin');
   })
})