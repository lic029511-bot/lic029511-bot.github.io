import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import LabSite from './lab-site';
const node=document.getElementById('site-data');
if(node){const data=JSON.parse(node.textContent||'{}');hydrateRoot(document.getElementById('root')!,<LabSite {...data}/>);}
