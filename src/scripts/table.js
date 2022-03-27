
function changeFormElement(ele, type) {
   let obj = {
      color: '',
      hover: '',
      strip: '',
      border: '',
      borderColor: ''
   };
   ele.addEventListener('change', (e)=> {
      const tableEle = document.querySelector('.bootstrap-table #bootstrap-table__table');
      console.log(ele, obj, tableEle.classList, e.target.value);
      if(obj[type]) {
         tableEle.classList.remove(obj[type]);
         tableEle.classList.add(e.target.value);
      } else {
         tableEle.classList.add(e.target.value);
      }
      obj[type] = e.target.value;
   });
}

window.addEventListener('load', ()=> {
   const isTablePage = document.querySelector('.table-content');
   console.log(isTablePage);
   if(isTablePage) {
      const colorSelectEle = document.querySelector('.bootstrap-table .bootstrap-table__color-select');
      const hoverSelectEle = document.querySelector('.bootstrap-table .bootstrap-table__hover-select');
      const stripSelectEle = document.querySelector('.bootstrap-table .bootstrap-table__strip-select');
      const borderSelectEle = document.querySelector('.bootstrap-table .bootstrap-table__border-select');
      const borderColorSelectEle = document.querySelector('.bootstrap-table .bootstrap-table__border-color-select');
      changeFormElement(colorSelectEle,'color');
      changeFormElement(hoverSelectEle,'hover');
      changeFormElement(stripSelectEle,'strip');
      changeFormElement(borderSelectEle,'border');
      console.log(borderColorSelectEle);
      changeFormElement(borderColorSelectEle,'borderColor');
   }
})