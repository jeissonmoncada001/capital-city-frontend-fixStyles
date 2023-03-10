import { useGLTF, useBounds } from '@react-three/drei';
import React, { useRef, useState, useEffect } from 'react';
import { useSnapshot, subscribe } from 'valtio';
import state from './Status';
import { useAccount } from 'wagmi';
import dataCapitalCity from './dataInfo';

export default function Model() {
  const { nodes, materials }: any = useGLTF('models/capital_city.glb');
  const ref = useRef<any>();
  const ref2 = useRef<any>();
  const ref3 = useRef<any>();
  const snap = useSnapshot(state);
  //const snapB = useSnapshot(stateB)

  const [hovered, hover] = useState<any>(false);
  const api = useBounds();

  const { address, isConnected, isDisconnected } = useAccount();

  useEffect(() => {
    dataCapitalCity.find((item) => {
      if (item.addressId === address) {
        state.current = item.lambertName;
        state.items[snap.current] = '#1EBBFF';

        ref.current?.children.find((meshes: any) => {
          if (meshes.material.name === item.lambertName) {
            subscribe(state, () => {
              if (state.zoom) {
                console.log('zoomedBack was', state.zoom);
                console.log('zoomedBack was', state.text);
                setTimeout(() => {
                  api.refresh(meshes).fit();
                  state.zoom = false;
                  state.text = 'MINTED';
                  console.log('zoomedBack was', state.zoom);
                  console.log('zoomedBack was', state.text);
                }, 1000);
              }
            });
          }
        });
      }
      return console.log('NO TIENE LANDS');
    });
  }, [address, api, snap]);

  return (
    <>
      {/* GRUPO MESH PROYECTOS */}
      <group
        ref={ref}
        dispose={null}
        scale={0.2}
        onPointerOver={(e: any) => (
          e.stopPropagation(), hover(e.object.material.color.set('#94c2f3'))
        )}
        onPointerOut={(e: any) => (
          e.intersections.length === 0 && hover(null),
          e.object.material.color.set('gainsboro')
        )}
        onClick={(e) => {
          e.stopPropagation();
          e.delta <= 2 && api.refresh(e.object).fit();
        }}
        onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
        onPointerDown={(e: any) => console.log(e.object.material.name)}>
        <mesh
          material-color={snap.items.lambert3}
          geometry={nodes.Proyectos_37.geometry}
          material={materials.lambert3}
        />

        <mesh
          material-color={snap.items.lambert49}
          geometry={nodes.Proyectos_01.geometry}
          material={materials.lambert49}
        />
        <mesh
          material-color={snap.items.lambert77}
          geometry={nodes.Proyectos_03.geometry}
          material={materials.lambert77}
        />
        <mesh
          material-color={snap.items.lambert38}
          geometry={nodes.Proyectos_05.geometry}
          material={materials.lambert38}
        />
        <mesh
          material-color={snap.items.lambert53}
          geometry={nodes.Proyectos_06.geometry}
          material={materials.lambert53}
        />
        <mesh
          material-color={snap.items.lambert65}
          geometry={nodes.Proyectos_07.geometry}
          material={materials.lambert65}
        />
        <mesh
          material-color={snap.items.lambert73}
          geometry={nodes.Proyectos_08.geometry}
          material={materials.lambert73}
        />
        <mesh
          material-color={snap.items.lambert45}
          geometry={nodes.Proyectos_09.geometry}
          material={materials.lambert45}
        />
        <mesh
          material-color={snap.items.lambert116}
          geometry={nodes.Proyectos_10.geometry}
          material={materials.lambert116}
        />
        <mesh
          material-color={snap.items.lambert59}
          geometry={nodes.Proyectos_100.geometry}
          material={materials.lambert59}
        />
        <mesh
          material-color={snap.items.lambert29}
          geometry={nodes.Proyectos_101.geometry}
          material={materials.lambert29}
        />
        <mesh
          material-color={snap.items.lambert35}
          geometry={nodes.Proyectos_102.geometry}
          material={materials.lambert35}
        />
        <mesh
          material-color={snap.items.lambert98}
          geometry={nodes.Proyectos_103.geometry}
          material={materials.lambert98}
        />
        <mesh
          material-color={snap.items.lambert81}
          geometry={nodes.Proyectos_104.geometry}
          material={materials.lambert81}
        />
        <mesh
          material-color={snap.items.lambert42}
          geometry={nodes.Proyectos_106.geometry}
          material={materials.lambert42}
        />
        <mesh
          material-color={snap.items.lambert127}
          geometry={nodes.Proyectos_107.geometry}
          material={materials.lambert127}
        />
        <mesh
          material-color={snap.items.lambert63}
          geometry={nodes.Proyectos_108.geometry}
          material={materials.lambert63}
        />
        <mesh
          material-color={snap.items.lambert125}
          geometry={nodes.Proyectos_109.geometry}
          material={materials.lambert125}
        />
        <mesh
          material-color={snap.items.lambert86}
          geometry={nodes.Proyectos_11.geometry}
          material={materials.lambert86}
        />
        <mesh
          material-color={snap.items.lambert87}
          geometry={nodes.Proyectos_110.geometry}
          material={materials.lambert87}
        />
        <mesh
          material-color={snap.items.lambert118}
          geometry={nodes.Proyectos_111.geometry}
          material={materials.lambert118}
        />
        <mesh
          material-color={snap.items.lambert71}
          geometry={nodes.Proyectos_113.geometry}
          material={materials.lambert71}
        />
        <mesh
          material-color={snap.items.lambert50}
          geometry={nodes.Proyectos_114.geometry}
          material={materials.lambert50}
        />
        <mesh
          material-color={snap.items.lambert113}
          geometry={nodes.Proyectos_116.geometry}
          material={materials.lambert113}
        />
        <mesh
          material-color={snap.items.lambert95}
          geometry={nodes.Proyectos_119.geometry}
          material={materials.lambert95}
        />
        <mesh
          material-color={snap.items.lambert66}
          geometry={nodes.Proyectos_12.geometry}
          material={materials.lambert66}
        />
        <mesh
          material-color={snap.items.lambert41}
          geometry={nodes.Proyectos_120.geometry}
          material={materials.lambert41}
        />
        <mesh
          material-color={snap.items.lambert104}
          geometry={nodes.Proyectos_121.geometry}
          material={materials.lambert104}
        />
        <mesh
          material-color={snap.items.lambert88}
          geometry={nodes.Proyectos_122.geometry}
          material={materials.lambert88}
        />
        <mesh
          material-color={snap.items.lambert25}
          geometry={nodes.Proyectos_13.geometry}
          material={materials.lambert25}
        />
        <mesh
          material-color={snap.items.lambert51}
          geometry={nodes.Proyectos_14.geometry}
          material={materials.lambert51}
        />
        <mesh
          material-color={snap.items.lambert78}
          geometry={nodes.Proyectos_15.geometry}
          material={materials.lambert78}
        />
        <mesh
          material-color={snap.items.lambert31}
          geometry={nodes.Proyectos_16.geometry}
          material={materials.lambert31}
        />
        <mesh
          material-color={snap.items.lambert27}
          geometry={nodes.Proyectos_17.geometry}
          material={materials.lambert27}
        />
        <mesh
          material-color={snap.items.lambert119}
          geometry={nodes.Proyectos_18.geometry}
          material={materials.lambert119}
        />
        <mesh
          material-color={snap.items.lambert57}
          geometry={nodes.Proyectos_20.geometry}
          material={materials.lambert57}
        />
        <mesh
          material-color={snap.items.lambert28}
          geometry={nodes.Proyectos_21.geometry}
          material={materials.lambert28}
        />
        <mesh
          material-color={snap.items.lambert8}
          geometry={nodes.Proyectos_22.geometry}
          material={materials.lambert8}
        />
        <mesh
          material-color={snap.items.lambert54}
          geometry={nodes.Proyectos_23.geometry}
          material={materials.lambert54}
        />
        <mesh
          material-color={snap.items.lambert107}
          geometry={nodes.Proyectos_24.geometry}
          material={materials.lambert107}
        />
        <mesh
          material-color={snap.items.lambert108}
          geometry={nodes.Proyectos_25.geometry}
          material={materials.lambert108}
        />
        <mesh
          material-color={snap.items.lambert124}
          geometry={nodes.Proyectos_26.geometry}
          material={materials.lambert124}
        />
        <mesh
          material-color={snap.items.lambert120}
          geometry={nodes.Proyectos_27.geometry}
          material={materials.lambert120}
        />
        <mesh
          material-color={snap.items.lambert58}
          geometry={nodes.Proyectos_28.geometry}
          material={materials.lambert58}
        />
        <mesh
          material-color={snap.items.lambert37}
          geometry={nodes.Proyectos_29.geometry}
          material={materials.lambert37}
        />
        <mesh
          material-color={snap.items.lambert43}
          geometry={nodes.Proyectos_30.geometry}
          material={materials.lambert43}
        />
        <mesh
          material-color={snap.items.lambert62}
          geometry={nodes.Proyectos_31.geometry}
          material={materials.lambert62}
        />
        <mesh
          material-color={snap.items.lambert103}
          geometry={nodes.Proyectos_32.geometry}
          material={materials.lambert103}
        />
        <mesh
          material-color={snap.items.lambert55}
          geometry={nodes.Proyectos_33.geometry}
          material={materials.lambert55}
        />
        <mesh
          material-color={snap.items.lambert47}
          geometry={nodes.Proyectos_34.geometry}
          material={materials.lambert47}
        />
        <mesh
          material-color={snap.items.lambert74}
          geometry={nodes.Proyectos_35.geometry}
          material={materials.lambert74}
        />
        <mesh
          material-color={snap.items.lambert46}
          geometry={nodes.Proyectos_36.geometry}
          material={materials.lambert46}
        />
        <mesh
          material-color={snap.items.lambert82}
          geometry={nodes.Proyectos_38.geometry}
          material={materials.lambert82}
        />
        <mesh
          material-color={snap.items.lambert94}
          geometry={nodes.Proyectos_39.geometry}
          material={materials.lambert94}
        />
        <mesh
          material-color={snap.items.lambert122}
          geometry={nodes.Proyectos_41.geometry}
          material={materials.lambert122}
        />
        <mesh
          material-color={snap.items.lambert79}
          geometry={nodes.Proyectos_42.geometry}
          material={materials.lambert79}
        />
        <mesh
          material-color={snap.items.lambert84}
          geometry={nodes.Proyectos_44.geometry}
          material={materials.lambert84}
        />
        <mesh
          material-color={snap.items.lambert110}
          geometry={nodes.Proyectos_45.geometry}
          material={materials.lambert110}
        />
        <mesh
          material-color={snap.items.lambert100}
          geometry={nodes.Proyectos_46.geometry}
          material={materials.lambert100}
        />
        <mesh
          material-color={snap.items.lambert64}
          geometry={nodes.Proyectos_47.geometry}
          material={materials.lambert64}
        />
        <mesh
          material-color={snap.items.lambert101}
          geometry={nodes.Proyectos_51.geometry}
          material={materials.lambert101}
        />
        <mesh
          material-color={snap.items.lambert40}
          geometry={nodes.Proyectos_52.geometry}
          material={materials.lambert40}
        />
        <mesh
          material-color={snap.items.lambert123}
          geometry={nodes.Proyectos_53.geometry}
          material={materials.lambert123}
        />
        <mesh
          material-color={snap.items.lambert126}
          geometry={nodes.Proyectos_54.geometry}
          material={materials.lambert26}
        />
        <mesh
          material-color={snap.items.lambert126}
          geometry={nodes.Proyectos_55.geometry}
          material={materials.lambert126}
        />
        <mesh
          material-color={snap.items.lambert112}
          geometry={nodes.Proyectos_57.geometry}
          material={materials.lambert112}
        />
        <mesh
          material-color={snap.items.lambert52}
          geometry={nodes.Proyectos_58.geometry}
          material={materials.lambert52}
        />
        <mesh
          material-color={snap.items.lambert105}
          geometry={nodes.Proyectos_59.geometry}
          material={materials.lambert105}
        />
        <mesh
          material-color={snap.items.lambert34}
          geometry={nodes.Proyectos_60.geometry}
          material={materials.lambert34}
        />
        <mesh
          material-color={snap.items.lambert67}
          geometry={nodes.Proyectos_61.geometry}
          material={materials.lambert67}
        />
        <mesh
          material-color={snap.items.lambert114}
          geometry={nodes.Proyectos_62.geometry}
          material={materials.lambert114}
        />
        <mesh
          material-color={snap.items.lambert83}
          geometry={nodes.Proyectos_63.geometry}
          material={materials.lambert83}
        />
        <mesh
          material-color={snap.items.lambert72}
          geometry={nodes.Proyectos_64.geometry}
          material={materials.lambert72}
        />
        <mesh
          material-color={snap.items.lambert76}
          geometry={nodes.Proyectos_65.geometry}
          material={materials.lambert76}
        />
        <mesh
          material-color={snap.items.lambert89}
          geometry={nodes.Proyectos_66.geometry}
          material={materials.lambert89}
        />
        <mesh
          material-color={snap.items.lambert30}
          geometry={nodes.Proyectos_67.geometry}
          material={materials.lambert30}
        />
        <mesh
          material-color={snap.items.lambert60}
          geometry={nodes.Proyectos_68.geometry}
          material={materials.lambert60}
        />
        <mesh
          material-color={snap.items.lambert61}
          geometry={nodes.Proyectos_70.geometry}
          material={materials.lambert61}
        />
        <mesh
          material-color={snap.items.lambert85}
          geometry={nodes.Proyectos_71.geometry}
          material={materials.lambert85}
        />
        <mesh
          material-color={snap.items.lambert48}
          geometry={nodes.Proyectos_72.geometry}
          material={materials.lambert48}
        />
        <mesh
          material-color={snap.items.lambert96}
          geometry={nodes.Proyectos_74.geometry}
          material={materials.lambert96}
        />
        <mesh
          material-color={snap.items.lambert111}
          geometry={nodes.Proyectos_75.geometry}
          material={materials.lambert111}
        />
        <mesh
          material-color={snap.items.lambert106}
          geometry={nodes.Proyectos_76.geometry}
          material={materials.lambert106}
        />
        <mesh
          material-color={snap.items.lambert117}
          geometry={nodes.Proyectos_78.geometry}
          material={materials.lambert117}
        />
        <mesh
          material-color={snap.items.lambert121}
          geometry={nodes.Proyectos_79.geometry}
          material={materials.lambert121}
        />
        <mesh
          material-color={snap.items.lambert80}
          geometry={nodes.Proyectos_80.geometry}
          material={materials.lambert80}
        />
        <mesh
          material-color={snap.items.lambert99}
          geometry={nodes.Proyectos_81.geometry}
          material={materials.lambert99}
        />
        <mesh
          material-color={snap.items.lambert109}
          geometry={nodes.Proyectos_82.geometry}
          material={materials.lambert109}
        />
        <mesh
          material-color={snap.items.lambert44}
          geometry={nodes.Proyectos_83.geometry}
          material={materials.lambert44}
        />
        <mesh
          material-color={snap.items.lambert36}
          geometry={nodes.Proyectos_84.geometry}
          material={materials.lambert36}
        />
        <mesh
          material-color={snap.items.lambert92}
          geometry={nodes.Proyectos_85.geometry}
          material={materials.lambert92}
        />
        <mesh
          material-color={snap.items.lambert93}
          geometry={nodes.Proyectos_86.geometry}
          material={materials.lambert93}
        />
        <mesh
          material-color={snap.items.lambert24}
          geometry={nodes.Proyectos_87.geometry}
          material={materials.lambert24}
        />
        <mesh
          material-color={snap.items.lambert102}
          geometry={nodes.Proyectos_89.geometry}
          material={materials.lambert102}
        />
        <mesh
          material-color={snap.items.lambert115}
          geometry={nodes.Proyectos_90.geometry}
          material={materials.lambert115}
        />
        <mesh
          material-color={snap.items.lambert68}
          geometry={nodes.Proyectos_91.geometry}
          material={materials.lambert68}
        />
        <mesh
          material-color={snap.items.lambert91}
          geometry={nodes.Proyectos_92.geometry}
          material={materials.lambert91}
        />
        <mesh
          material-color={snap.items.lambert56}
          geometry={nodes.Proyectos_93.geometry}
          material={materials.lambert56}
        />
        <mesh
          material-color={snap.items.lambert90}
          geometry={nodes.Proyectos_94.geometry}
          material={materials.lambert90}
        />
        <mesh
          material-color={snap.items.lambert75}
          geometry={nodes.Proyectos_95.geometry}
          material={materials.lambert75}
        />
        <mesh
          material-color={snap.items.lambert33}
          geometry={nodes.Proyectos_96.geometry}
          material={materials.lambert33}
        />
        <mesh
          material-color={snap.items.lambert70}
          geometry={nodes.Proyectos_97.geometry}
          material={materials.lambert70}
        />
        <mesh
          material-color={snap.items.lambert39}
          geometry={nodes.Proyectos_98.geometry}
          material={materials.lambert39}
        />
        <mesh
          material-color={snap.items.lambert97}
          geometry={nodes.Proyectos_99.geometry}
          material={materials.lambert97}
        />
      </group>

      {/* GRUPO MESH VIAS */}
      <group
        scale={0.2}
        ref={ref2}
        //onPointerDown={(e) => (console.log(e.object.material.name))}
      >
        <mesh
          geometry={nodes.Vias_1.geometry}
          material={materials.lambert187}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_2.geometry}
          material={materials.lambert186}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_3.geometry}
          material={materials.lambert190}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_4.geometry}
          material={materials.lambert192}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_5.geometry}
          material={materials.lambert194}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_6.geometry}
          material={materials.lambert191}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_7.geometry}
          material={materials.lambert193}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_8.geometry}
          material={materials.lambert188}
          material-color={'#616161'}
        />
        <mesh
          geometry={nodes.Vias_9.geometry}
          material={materials.lambert189}
          material-color={'#616161'}
        />
      </group>
      {/* GRUPO MESH ZONAS VERDES */}
      <group
        scale={0.2}
        ref={ref3}
        //onPointerDown={(e) => (console.log(e.object.material.name))}
      >
        {/* EXCLUIDOS */}
        <mesh
          geometry={nodes.Proyectos_49.geometry}
          material={materials.lambert23}
          material-color={'#7ba578'}
          scale={0}
        />
        <mesh
          geometry={nodes.Proyectos_48.geometry}
          material={materials.lambert6}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_19.geometry}
          material={materials.lambert5}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_04.geometry}
          material={materials.lambert4}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_115.geometry}
          material={materials.lambert7}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_125.geometry}
          material={materials.lambert2}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_118.geometry}
          material={materials.lambert21}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_105.geometry}
          material={materials.lambert32}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_50.geometry}
          material={materials.lambert22}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_112.geometry}
          material={materials.lambert20}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_123.geometry}
          material={materials.lambert16}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_02.geometry}
          material={materials.lambert14}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_117.geometry}
          material={materials.lambert15}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_43.geometry}
          material={materials.lambert17}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_77.geometry}
          material={materials.lambert18}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_56.geometry}
          material={materials.lambert19}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_69.geometry}
          material={materials.lambert13}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Proyectos_40.geometry}
          material={materials.lambert12}
        />
        <mesh
          geometry={nodes.Zonas_28.geometry}
          material={materials.lambert148}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_10.geometry}
          material={materials.lambert133}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_27.geometry}
          material={materials.lambert150}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_32.geometry}
          material={materials.lambert169}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_29.geometry}
          material={materials.lambert171}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_22.geometry}
          material={materials.lambert170}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_26.geometry}
          material={materials.lambert153}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_34.geometry}
          material={materials.lambert141}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_18.geometry}
          material={materials.lambert144}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_11.geometry}
          material={materials.lambert154}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_43.geometry}
          material={materials.lambert184}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_41.geometry}
          material={materials.lambert185}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_42.geometry}
          material={materials.lambert183}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_57.geometry}
          material={materials.lambert181}
          material-color={'#7ba578'}
        />

        {/* /material-color={snap.items.lambert14}/ */}
        <mesh
          geometry={nodes.Proyectos_124.geometry}
          material={materials.lambert9}
        />
        <mesh
          geometry={nodes.Proyectos_73.geometry}
          material={materials.lambert10}
        />
        <mesh
          geometry={nodes.Proyectos_88.geometry}
          material={materials.lambert11}
        />

        <mesh
          geometry={nodes.Zonas_01.geometry}
          material={materials.lambert156}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_02.geometry}
          material={materials.lambert157}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_03.geometry}
          material={materials.lambert149}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_04.geometry}
          material={materials.lambert131}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_05.geometry}
          material={materials.lambert167}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_06.geometry}
          material={materials.lambert129}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_07.geometry}
          material={materials.lambert142}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_08.geometry}
          material={materials.lambert136}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_09.geometry}
          material={materials.lambert134}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_12.geometry}
          material={materials.lambert140}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_13.geometry}
          material={materials.lambert145}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_14.geometry}
          material={materials.lambert168}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_15.geometry}
          material={materials.lambert135}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_16.geometry}
          material={materials.lambert143}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_17.geometry}
          material={materials.lambert151}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_19.geometry}
          material={materials.lambert155}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_20.geometry}
          material={materials.lambert130}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_21.geometry}
          material={materials.lambert138}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_23.geometry}
          material={materials.lambert139}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_24.geometry}
          material={materials.lambert152}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_25.geometry}
          material={materials.lambert128}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_30.geometry}
          material={materials.lambert132}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_31.geometry}
          material={materials.lambert146}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_33.geometry}
          material={materials.lambert137}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_35.geometry}
          material={materials.lambert147}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_36.geometry}
          material={materials.lambert178}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_37.geometry}
          material={materials.lambert165}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_38.geometry}
          material={materials.lambert166}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_39.geometry}
          material={materials.lambert182}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_40.geometry}
          material={materials.lambert180}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_44.geometry}
          material={materials.lambert172}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_45.geometry}
          material={materials.lambert176}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_46.geometry}
          material={materials.lambert173}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_47.geometry}
          material={materials.lambert175}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_48.geometry}
          material={materials.lambert179}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_49.geometry}
          material={materials.lambert174}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_50.geometry}
          material={materials.lambert177}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_51.geometry}
          material={materials.lambert161}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_52.geometry}
          material={materials.lambert158}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_53.geometry}
          material={materials.lambert162}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_54.geometry}
          material={materials.lambert159}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_55.geometry}
          material={materials.lambert163}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_56.geometry}
          material={materials.lambert160}
          material-color={'#7ba578'}
        />
        <mesh
          geometry={nodes.Zonas_58.geometry}
          material={materials.lambert164}
          material-color={'#7ba578'}
        />
      </group>
    </>
  );
}
useGLTF.preload('models/capital_city.glb');
