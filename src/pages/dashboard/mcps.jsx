import { Card, CardHeader, CardBody, Typography, Avatar, Chip, Tooltip, Progress, } from '@material-tailwind/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
// import { authorsTableData, projectsTableData } from '@/data';
import mcpsData from '../../data/mcps-data';
import React, { useEffect, useState } from 'react';
import Posts from '../../components/posts';
import Pagination from '../../components/Pagination'
import { func } from 'prop-types';
import {
  Modal,
  Ripple,
  Input,
  initTE,
} from "tw-elements";

initTE({ Modal, Ripple, Input });

export function MCPs() {
  const [posts, setPosts] = useState(mcpsData)
  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)


  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const removeHandle = (index) => {
    setPosts(posts.filter((post, idx) => idx !== index));
  }

  const [displayFormAdd, setDisplayFormAdd] = useState('none')

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [formData, setFormData] = useState({ name: '', location: '', date: '', status: '' });
  const [formData1, setFormData1] = useState({ name: '', location: '' });

  const [idxCurrent, setIdxCurrent] = useState(0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInputChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  }

  const addHandle = () => {
    setPosts([...posts, {
      id: posts.length + 1,
      checkbox: "uncheck",
      name: formData1.name,
      location: formData1.location,
      date: date,
      status: "New"
    }])
    setFormData1({ name: '', location: '' })
  };

  const updateHandle = () => {
    posts[idxCurrent].name = formData.name
    posts[idxCurrent].location = formData.location
    posts[idxCurrent].date = formData.date
    posts[idxCurrent].status = formData.status
    setFormData({ name: '', location: '' })
  }

  const switchUpdating = (index, name, location, date1, status1) => {
    setFormData({ name: name, location: location, date: date1, status: status1 })
    setIdxCurrent(index)
  }

  return (
    <div className="bg-white shadow-xl mt-12 pb-2">
      <button
        type="button"
        data-te-toggle="modal"
        data-te-target="#exampleModalFullscreen1"
        class="mt-2 ml-2 inline-block rounded mcp-bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        CREATE MCP
      </button>


      <Posts posts={currentPosts} loading={loading} removeHandle={removeHandle} switchUpdating={switchUpdating} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} _paginate={paginate} />

      <div
        data-te-modal-init
        class="fixed top-0 mt-12 z-[1055] hidden h-full w-4/12 overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalFullscreen"
        tabIndex="-1"
        aria-labelledby="exampleModalFullscreenLabel"
        aria-hidden="true">

        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto rounded translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
            <div
              className="mt-12 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalFullscreenLabel">
                Update MCP
              </h5>
            </div>

            <div className="relative p-4 min-[0px]:overflow-y-auto">
              <div className="flex justify-center">
                <div className="block max-w-xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div >
                    <form>
                      <div class="mb-3" data-te-input-wrapper-init>
                        <div className="ml-2">
                          <h6 class="mb-1 mt-4 text-base font-medium leading-tight text-primary">Name</h6>
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 my-border"
                          id="exampleFormControlInput001"
                          placeholder="Example label" />
                      </div>

                      <div className="ml-2">
                        <h6 class="mb-1 mt-4 text-base font-medium leading-tight text-primary">Location</h6>
                      </div>
                      <div class="mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 my-border"
                          id="exampleFormControlInput002"
                          placeholder="Location" />
                      </div>

                      <div className="ml-2">
                        <h6 class="mb-1 mt-4 text-base font-medium leading-tight text-primary">Date</h6>
                      </div>
                      <div class="mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 my-border"
                          id="exampleFormControlInput002"
                          placeholder="Location" />
                      </div>

                      <div className="ml-2">
                        <h6 class="mb-1 mt-4 text-base font-medium leading-tight text-primary">Status</h6>
                      </div>
                      <div class="mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          name="status"
                          value={formData.status}
                          onChange={handleInputChange}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 my-border"
                          id="exampleFormControlInput002"
                          placeholder="Location" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>

            <div
              className="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
              <button
                type="button"
                className="ml-2 inline-block rounded mcp-btn-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss>
                Close
              </button>
              <button
                onClick={updateHandle}
                type="button"
                class="inline-block rounded mcp-bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-modal-dismiss>
                Update
              </button>
            </div>

          </div>
        </div>
      </div>

      <div
        data-te-modal-init
        class="fixed top-0 mt-12 z-[1055] hidden h-full w-4/12 overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalFullscreen1"
        tabIndex="-1"
        aria-labelledby="exampleModalFullscreenLabel"
        aria-hidden="true">
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[0px]:m-0 min-[0px]:h-full min-[0px]:max-w-none">
          <div
            className="pointer-events-auto relative flex w-full flex-col rounded-md bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600 min-[0px]:h-full min-[0px]:rounded-none min-[0px]:border-0">
            <div
              className="mt-12 flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
              <h5
                className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalFullscreenLabel">
                New MCP
              </h5>
            </div>

            <div className="relative p-4 min-[0px]:overflow-y-auto">
              <div className="flex justify-center">
                <div className="block max-w-xl rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div >
                    <form>
                      <div className="ml-2">
                        <h6 class="mb-2 mt-0 text-base font-medium leading-tight text-primary">Name</h6>
                      </div>
                      <div className="mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          name="name"
                          value={formData1.name}
                          onChange={handleInputChange1}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 my-border"
                          id="exampleFormControlInput1"
                          placeholder="Name" />
                      </div>
                      <div className="ml-2">
                        <h6 class="mb-2 mt-0 text-base font-medium leading-tight text-primary">Location</h6>
                      </div>
                      <div class="mb-4" data-te-input-wrapper-init>
                        <input
                          type="text"
                          name="location"
                          value={formData1.location}
                          onChange={handleInputChange1}
                          class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 my-border"
                          id="exampleFormControlInput1"
                          placeholder="Location" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>


            <div
              className="mt-auto flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50 min-[0px]:rounded-none">
              <button
                type="button"
                className="ml-2 inline-block rounded mcp-btn-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss>
                Close
              </button>
              <button
                onClick={addHandle}
                type="button"
                class="inline-block rounded mcp-bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-modal-dismiss>
                Add
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default MCPs;
