import React, { useState, useEffect } from "react"
import { View, Text, ToastAndroid, TouchableOpacity, Modal, TextInput, Dimensions, Image, ActivityIndicator } from "react-native"
import { StyleHome } from "./styles"
import {AdMobBanner, AdMobInterstitial, PublisherBanner} from "react-native-admob"
import AsyncStorage from "@react-native-community/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons"

const Data = [1,2,3,4,5]
const {width, height} = Dimensions.get("window")
const reload = (<Icon name="cached" size={height / 20} color="#fff"/>)

const HomeScreen = () =>{

    const [actionLink, SetactionLink] = useState(false)
    const [modal, setModal] = useState(false)
    const [modalValue, setModalValue] = useState(false)
    const [ModalCondition,setModalCondition] = useState(0)
    const [linkBanner, setLinkBanner] = useState([])
    const [linkInterinstall, setLinkInterinstall] = useState([])
    const [textLink, setTextLink] = useState("")
    const [copyinterinstall, setcopyinterinstall] = useState([])
    const [copyBanner, setcopyBanner] = useState([])
    const [LoadingOptions, setLoadingOptions] = useState(true)

    useEffect(()=>{
        setLoadingOptions(true)
        AsyncStorage.getItem("valueBanner").then(value=>{
            setLinkBanner(JSON.parse(value))
            setcopyBanner(JSON.parse(value))
        })
        AsyncStorage.getItem("valueInterinstall"). then(value=>{
            setLinkInterinstall(JSON.parse(value))
            setcopyinterinstall(JSON.parse(value))
        })
        setTimeout(()=>{
            setLoadingOptions(false)
        },3000)
    },[])

    const renderBanner = (value) => {
        return(
            <View key={value.idKey} style={{marginBottom:height / 100}}>
                <PublisherBanner
                    adSize="smartBannerPortrait"
                    adUnitID={value.link}
                    testDevices={[PublisherBanner.simulatorId]}
                    onAdFailedToLoad={error => console.log(error)}
                    onAppEvent={event => console.log(event.name, event.info)}
                />
                <AdMobBanner
                    adSize="smartBannerPortrait"
                    adUnitID={value.link}
                    onAdFailedToLoad={error => console.log(error)} 
                />
            </View>
        )
    }

    const renderInterstisial = (value) => {
        return(
            <TouchableOpacity key={value.idKey} activeOpacity={0.3} onPress={()=>{InterstisialIklan(value.link)}}  style={StyleHome.boxTouch}>
                <Text>Interstisial {value.idKey - 1}</Text>
            </TouchableOpacity>
        )
    }

    const ListLink = (value) => {
        return(
            <View style={StyleHome.boxListLink} key={value.idKey}>
                <Text style={StyleHome.textLink}>{value.link}</Text>
                <Text onPress={()=>deleteLink(value.idKey)} style={StyleHome.textDellet}>X</Text>
            </View>
        )
    }

    const deleteLink = (index) => {
        if(ModalCondition === 1 && ModalCondition != 2){
            const data = []
            linkBanner.map(value=>{
                if(parseInt(value.idKey) != parseInt(index)){
                    data.push(value)
                }
            })
            setLinkBanner(data)
            setcopyBanner(data)
            AsyncStorage.setItem("valueBanner", JSON.stringify(data))
        }else{
            const data = []
            linkInterinstall.map(value=>{
                if(parseInt(value.idKey) != parseInt(index)){
                    data.push(value)
                }
            })
            setLinkInterinstall(data)
            setcopyinterinstall(data)
            AsyncStorage.setItem("valueInterinstall", JSON.stringify(data))
        }
        ToastAndroid.showWithGravity(
            'dellet succes',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        )
    }

    const saveLink = () => {
        if(ModalCondition === 1 && ModalCondition != 2){
            linkBanner.push({
                idKey:linkBanner.length + 1,
                link:textLink
            })
        }else{
            linkInterinstall.push({
                idKey:linkBanner.length + 1,
                link:textLink
            })
        }
        AsyncStorage.setItem("valueBanner", JSON.stringify(linkBanner))
        AsyncStorage.setItem("valueInterinstall", JSON.stringify(linkInterinstall))
        SetactionLink(false)
        ToastAndroid.showWithGravity(
            'save success',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
        )
    }

    const InterstisialIklan = (value) => {
            AdMobInterstitial.setAdUnitID(value);
            AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
            AdMobInterstitial.requestAd().then(() => {
                AdMobInterstitial.showAd()
                ToastAndroid.showWithGravity(
                    'Iklan Show...',
                    ToastAndroid.LONG,
                    ToastAndroid.CENTER,
                )
            });          
    }

    const restart = () => {
        setLoadingOptions(true)
        setLinkBanner(copyBanner)
        setLinkInterinstall(copyinterinstall)
        setTimeout(()=>{
            setLoadingOptions(false)
        },3000)
    }

    const Loading = () => {
        return (
            <View style={{width:'100%', alignItems:"center"}}>
                <ActivityIndicator size="small" color="#00BFFF"/>
                <Text>loading...</Text>
            </View>
        ) 
    }

    return(
        <View style={StyleHome.box}>
            <Modal visible={modalValue} transparent={true}>
            <TouchableOpacity style={StyleHome.boxModal} onPress={()=>{
                setModalValue(false)
                setModal(false)
                SetactionLink(false)
                }} activeOpacity={0.3}>
                    <View style={StyleHome.boxModalValue}>
                        <Text onPress={()=>{
                            setModal(true)
                            setModalValue(false)
                            setModalCondition(1)
                            }} style={StyleHome.boxTouchModal}>AdmobBanner</Text>
                        <Text onPress={()=>{
                            setModal(true)
                            setModalValue(false)
                            setModalCondition(2)
                            }} style={StyleHome.boxTouchModal}>AdmobInterinstall</Text>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Modal transparent={true} visible={modal} animationType="fade">
            <TouchableOpacity style={StyleHome.boxModal} onPress={()=>{
                setModalValue(false)
                setModal(false)
                SetactionLink(false)
                }} activeOpacity={0.3}>
                    <View style={StyleHome.boxComponentModal}>
                        <Text style={StyleHome.textTitleModal}>{ModalCondition === 1 && ModalCondition != 2 ? "AdmobBanner" : "AdmobInterinstall"}</Text>
                        <View style={StyleHome.boxRowModal}>
                            <Text style={{color:'gray'}}>3 iklan</Text>
                            <Text onPress={()=>actionLink === false ? SetactionLink(true) : SetactionLink(false)} style={actionLink === true ? StyleHome.textAddIklanClose : StyleHome.textAddIklan}>{actionLink === true ? "close" : "Add link"}</Text>
                        </View>
                        {actionLink === true ? (
                            <View style={{width:'100%', alignItems:"center"}}>
                            <Text>Link:</Text>
                            <View style={StyleHome.boxInput}>
                            <TextInput
                            onChangeText={index=>setTextLink(index)}
                            style={StyleHome.input}
                            placeholder="your link"
                            />
                            <TouchableOpacity onPress={()=>saveLink()} style={StyleHome.touchSaveModal}>
                                <Text style={{color:"#fff"}}>save</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        ):false }
                        { ModalCondition === 1 && ModalCondition != 2 ? linkBanner.map(value=> {return ListLink(value)}) : linkInterinstall.map(value=> {return ListLink(value)}) }
                    </View>
                </TouchableOpacity>
            </Modal>
            <View style={StyleHome.boxRelative}>
                <View>
                <Text style={StyleHome.textRelative1}>Hai,</Text>
                <Text style={StyleHome.textRelative2}>Tuan Developern...</Text>
                </View>
                <View style={{alignItems:'center'}}>
                {/* <Text style={StyleHome.textRelative2}>Selamat Mencoba !!!</Text> */}
                <TouchableOpacity onPress={()=>restart()}>
                    {reload}
                </TouchableOpacity>
                </View>
            </View>
            <View style={StyleHome.boxAbsolute}>
                <View style={StyleHome.boxDesc}>
                <View style={StyleHome.boxDesc1}>
                <Text style={StyleHome.textDesc1}>{LoadingOptions === true ? Loading() : linkBanner.length}</Text>
                {LoadingOptions === true ? false : <Text style={StyleHome.textDesc2}>Banner</Text>}
                </View>

                <View style={{height : "60%", borderWidth:0.5, borderColor:"#fff"}}/>

                <View style={StyleHome.boxDesc1}>
                        <Text style={StyleHome.textDesc1}>{LoadingOptions === true ? Loading() : linkInterinstall.length}</Text>
                        {LoadingOptions === true ? false : <Text style={StyleHome.textDesc2}>Interinstall</Text>}
                </View>

                <View style={{height : "60%", borderWidth:0.5, borderColor:"#fff"}}/>

                <TouchableOpacity onPress={()=>setModalValue(true)} style={StyleHome.boxDesc1} activeOpacity={0.5}>
                <Text style={StyleHome.textDesc1}>+</Text>
                <Text style={StyleHome.textDesc2}>Add Iklan</Text>
                </TouchableOpacity>
                </View>
                <View style={StyleHome.boxIklan}>
                    <Text style={StyleHome.textIklan}>Iklan Banner</Text>
                    {LoadingOptions === true ? Loading() : linkBanner.map(value=> {return renderBanner(value)}) }
                </View>
                <View style={StyleHome.boxIklan}>
                    <Text style={StyleHome.textIklan}>Iklan Interinstall</Text>
                    {LoadingOptions === true ? Loading() : (
                        <View style={{width:'100%', flexWrap:'wrap', flexDirection:'row'}}>
                        {linkInterinstall.map(value=> {return renderInterstisial(value)})}
                        </View>
                    ) }
                </View>
            </View>
        </View>
    )
}

export default HomeScreen