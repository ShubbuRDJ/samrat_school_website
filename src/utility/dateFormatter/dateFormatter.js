export default function convertToDDMMYYYY(dateTimeStr) {
    const date = new Date(dateTimeStr);
    const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(date.getUTCDate()).padStart(2, '0');
    const yyyy = date.getUTCFullYear();

    if(!isNaN(mm) && !isNaN(dd)){
      return (dd) + '/' + mm + '/' + yyyy;
    }
    else{
      return ''
    }
  
  }