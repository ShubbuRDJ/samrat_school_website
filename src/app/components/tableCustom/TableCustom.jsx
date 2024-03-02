import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './tableCustom.scss'
import { Clear, ModeEdit, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Grid, Tooltip } from '@mui/material';
import { removeExtraSpaces } from '../../../utility/commonUtil';

export default function TableCustom({ columns, datas, dataKey, actionKey, align, tableContainerMaxHeight, }) {
  const handleActionButton = (action, data) => {
    action?.setOpen(!action?.open)
    action?.setCallback(data)
  }

  const jsonParserForDoc = (data) => {
    try {
      const jsonData = JSON.parse(JSON.stringify(data));

      return jsonData;
    } catch (error) {
    }
  }

  const handleExperienceText = (e, index, text) => {
    e.preventDefault();
    const box = document.getElementById(`experience-${index}`)
    const boxPara = document.getElementById(`experience-para-${index}`)
    const boxReadMore = document.getElementById(`experience-read-more-${index}`)
    const boxReadMoreTxt = document.getElementById(`experience-read-more-text-${index}`)

    if ((boxReadMoreTxt.textContent) === 'Read More') {
      box.style.height = 'auto'
      boxPara.textContent = text;
      boxReadMoreTxt.textContent='Read Less';
      boxReadMore.style.backgroundImage = 'linear-gradient(1deg, #69696b, #051d2d 99%)'
    }
    else {
      box.style.height = '204px'
      boxPara.textContent = text.substring(0, 80) + '...';
      boxReadMoreTxt.textContent='Read More';
      boxReadMore.style.backgroundImage = 'linear-gradient(1deg, #4f58fd, #051d2d 99%)'
    }
  }



  const handleOpenPdf = (e, file) => {
    window.open(`${process.env.PUBLIC_URL}/pdf/${file}`, '_blank');
  }

  const navigate = useNavigate();
  let serialNumber = 0;
  return (
    <>
      <TableContainer sx={{ maxHeight: tableContainerMaxHeight }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ fontWeight: 600 }} className='table-head-row'>
              {columns?.map((column, index) => (
                <TableCell
                  key={index}
                  align={align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              {
                actionKey?.length ? (<TableCell
                  align={align}
                  style={{ minWidth: 170 }}
                >
                  Remark
                </TableCell>) : null
              }
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "white" }}>
            {datas
              ?.map((data, inn) => {
                serialNumber++;
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={data.Id}>
                    {dataKey?.map((key, index) => {

                      if (key === "serialNum") {
                        return (<TableCell align={align} key={index + 1000}>{serialNumber}</TableCell>)
                      }

                      if (key in data) {
                        if (key === "matching_percentage") {
                          return (<TableCell align={align} key={index + 1000}>
                            <Grid className='table-varification-box'>
                              <button
                                onClick={() => navigate('/detail', { state: data })}
                                style={{ background: `${data[key] >= 50 ? 'radial-gradient(100% 100% at 100% 0,#8caa88 0,#49ed1c 100%)' : 'radial-gradient(100% 100% at 100% 0,#aa8a88 0,#ed341c 100%)'}` }}
                              >
                                {`${Math.ceil(data[key])}%`}
                              </button>
                            </Grid>
                          </TableCell>)
                        }
                        else if (key === "doc_matching_percentage") {
                          return (<TableCell align={align} key={index + 1000}>
                            <Grid className='table-varification-box btn-diff-type'>
                              <button
                                style={{ background: `${data[key] >= 50 ? 'radial-gradient(100% 100% at 100% 0,#8caa88 0,#49ed1c 100%)' : 'radial-gradient(100% 100% at 100% 0,#aa8a88 0,#ed341c 100%)'}` }}
                              >
                                {`${Math.ceil(data[key])}%`}
                              </button>
                            </Grid>
                          </TableCell>)
                        }
                        else if (key === "filled_up_value") {

                          if (jsonParserForDoc(data[key])) {
                            if (typeof jsonParserForDoc(data[key]) === 'object') {
                              return (<TableCell align={align} key={serialNumber + 1000}>
                                <Grid id={`experience-${inn + 1}`} key={serialNumber + 54554}
                                  className="experience-list-container">
                                  <ul>
                                    <li>
                                      <span>Date From:</span> {jsonParserForDoc(data[key])?.start_date}
                                    </li>
                                    <li>
                                      <span>Date To:</span>  {jsonParserForDoc(data[key])?.end_date}
                                    </li>
                                    <li>
                                      <span>Organisation Name:&nbsp;</span>
                                      <p>
                                        {
                                          removeExtraSpaces(data[key]?.org_name)
                                        }
                                      </p>
                                    </li>
                                    <li>
                                      <Grid className="experience-box">
                                        <span>Description:</span>
                                        <p style={{ cursor: 'pointer' }} key={serialNumber + 121} id={`experience-para-${inn + 1}`}
                                        >
                                          {(jsonParserForDoc(data[key])?.description)?.length > 80 ? jsonParserForDoc(data[key])?.description?.substring(0, 80) + '...' : jsonParserForDoc(data[key])}
                                        </p>



                                      </Grid>


                                      <Grid key={inn + 12121} id={`experience-read-more-${inn + 1}`}
                                        onClick={(e) => {
                                          handleExperienceText(e, inn + 1, jsonParserForDoc(data[key])?.description)
                                        }}
                                        className="read-more">
                                        <span id={`experience-read-more-text-${inn + 1}`}>Read More</span>
                                      </Grid>
                                    </li>
                                  </ul>
                                </Grid>
                              </TableCell>)
                            }
                            else {
                              return (
                                <TableCell align={align} key={index + 1000}>
                                  {data[key] ? (data[key].length > 40) ?
                                    (<Tooltip title={data[key]}>
                                      {data[key].substring(0, 40) + '...'}
                                    </Tooltip>)
                                    :
                                    data[key]
                                    : 'N/A'}
                                </TableCell>
                              )
                            }
                          }
                          else {
                            return (
                              <TableCell align={align} key={index + 1000}>
                                {data[key] ? (data[key].length > 40) ?
                                  (<Tooltip title={data[key]}>
                                    {data[key].substring(0, 40) + '...'}
                                  </Tooltip>)
                                  :
                                  data[key]
                                  : 'N/A'}
                              </TableCell>
                            )
                          }
                        }
                        else if (key === "doc_file") {
                          return (
                            <TableCell style={{cursor:'pointer'}} onClick={(e) => handleOpenPdf(e, data[key])} align={align} key={index + 1000}>
                              {data[key] ? (data[key].length > 40) ?
                                (<Tooltip title={data[key]}>
                                  {data[key].substring(0, 40) + '...'}
                                </Tooltip>)
                                :
                                data[key]
                                : 'N/A'}
                            </TableCell>
                          )
                        }
                        else if (key === 'doc_verification_status') {
                          return (<TableCell align={align} key={index + 1000}>{data[key] ? 'True' : 'False'}</TableCell>)
                        }
                        else {
                          return (<TableCell style={{ maxHeight: '100px', overflow: "auto" }} align={align} key={index + 1000}>{data[key] ? data[key] : "N/A"}</TableCell>)
                        }
                      }
                      else {
                        return (<TableCell align={align} key={index + 1000}>N/A</TableCell>);
                      }


                    })
                    }
                    {
                      (actionKey?.length) ?
                        (<TableCell align={align} >
                          <Grid style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '15px' }}>
                            {
                              actionKey?.map((action) => {
                                if (action?.actionName === 'edit') {
                                  return (<ModeEdit style={{ cursor: 'pointer' }} />)
                                }
                                else if (action?.actionName === 'delete') {
                                  return (<Clear style={{ cursor: 'pointer' }} />)
                                }
                                else if (action?.actionName === 'view') {
                                  return (<Visibility onClick={() => handleActionButton(action, data)} style={{ cursor: 'pointer' }} />)
                                }
                                else return null

                              })
                            }
                          </Grid>
                        </TableCell>)
                        : null
                    }
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer >

    </>

  );
}
