<template>

    <nav>
        <span>logo</span>
        <span>home</span>
        <span>about us</span>
        <span>contact</span>
    </nav>
    
</template>

<script>
export default {
    name:"NavBar",
    data(){
        return{
            t:'hi'
        }
    }
}
</script>

<style lang="scss" scoped>
nav{
    position: fixed;
    top: 0;
    //background: rgba(255, 255, 255, 0.13);
    width: 66%;
    z-index: 999;
    height: 80px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 50px;
    span{
        user-select: none;
        cursor: pointer;
        &:first-child{
            margin-right: auto;
            font-size: 30px;
            color: #fff;
            text-transform: uppercase;
            font-weight: 800;
        }
        &:not(:first-child){
            color: #fff;
            font-weight: 400;
        }
    }
}
</style>