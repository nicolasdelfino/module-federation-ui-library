export const getValidProps = (props) => {
  const { as, m, p, classAdd, tC, bC, mL, mR, mT, mB, pL, pR, pT, pB, sh, shValue, navActive, navActiveBgValue, navActiveColorValue, avatarName, ...rest } = props
  const invalid = null || undefined
  
  const styles = {
      ...sh && {boxShadow: shValue || "0px 10px 20px -5px rgba(0, 0, 0, 0.3)"},
      ...navActive && {backgroundColor: navActiveBgValue || 'black', color: navActiveColorValue || 'white'},
      ...(m !== invalid && {margin: m}),
      ...(p !== invalid && {padding: p}),
      ...(tC !== invalid && {color: tC}),
      ...(bC !== invalid && {backgroundColor: bC}),
      ...(mL !== invalid && {marginLeft: mL}),
      ...(mR !== invalid && {marginRight: mR}),
      ...(mT !== invalid && {marginTop: mT}),
      ...(mB !== invalid && {marginBottom: mB}),
      ...(pL !== invalid && {paddingLeft: pL}),
      ...(pR !== invalid && {paddingRight: pR}),
      ...(pT !== invalid && {paddingTop: pT}),
      ...(pB !== invalid && {paddingBottom: pB}),
  };

  return {
    props: rest,
    class: classAdd,
    styles,
    ...(as !== invalid && {tag: as}),
  }
}
