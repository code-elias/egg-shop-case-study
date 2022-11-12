<template>
    <div class="contenitore-generale">
        <!-- Sezione About US -->
        <div class="about_us">
            <h1>About us</h1>
            <p>With a shared love for the universally coveted egg sandwich, husband/wife team Sarah Schneider and
                Demetri
                Makoulis alongside chef Nick Korbee opened the first Egg Shop outpost in 2014, in the Soho neighborhood
                of
                New
                York City. Inspired by the incredible versatility of the egg, the team went on to develop infinite
                egg-centric
                dishes that are both familiar and nuanced. Today, Korbee executes a seasonal menu of organic, locally
                sourced
                dishes for breakfast, lunch and dinner at both their cozy SoHo location and more spacious outpost in
                Williamsburg, Brooklyn (opened in 2017) – paired with fresh juices, creative & refreshing cocktails, and
                a
                selection of organic and biodynamic wines. Eggheads everywhere can now recreate the restaurant’s
                signature
                bowls, sandwiches, and breakfast cocktails with Egg Shop: The Cookbook (released in 2017). Maintaining
                Egg
                Shop’s signature playful-yet-minimalist aesthetic, the book comically and thoroughly guides readers
                through
                all
                egg-cooking techniques and provides recipes for more than 100 inventive egg-centric dishes.</p>
        </div>

        <!-- Sezione Menu -->
        <div class="menu">
            <div class="contenitore-immagine">
                <div class="immagine">
                    <img src="../assets/img/breakfast.jpg" alt="">
                </div>
            </div>
            <div class="contenitore-testo">
                <div class="testo">
                    <h1>Menus</h1>
                    <p>A seasonal menu of organic, locally sourced dishes for breakfast and lunch. </p>
                    <button>VIEW OUR MENUS</button>
                </div>
            </div>

        </div>


    </div>
</template>
  
<script>
export default {};
</script>
  
<style scoped lang="scss">
.contenitore-generale {
    font-family: "Luckiest Guy", cursive;
}

.about_us {
    font-size: 1rem;
    line-height: 1.5;
    color: #000;
    text-align: center;
    margin: 0 auto;
    max-width: 1000px;

    h1 {
        color: #000;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0;
        padding-top: 40px;

    }

    p {
        padding-top: 40px;
    }
}

.menu {
    display: flex;
    align-items: center;
    padding-top: 100px;
    margin: 0 auto;

    .contenitore-immagine {
        flex-basis: 50%;

        .immagine {
            max-width: 85%;
            margin: 0 auto;
            // position: absolute;
            // top: 0;
            // left: 0;
            // transform: translate(-50%, -50%);
        }
    }

    .contenitore-testo {
        flex-basis: 50%;

        .testo {
            max-width: 75%;
        }

        h1 {
            color: #000;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 0;
            padding: 20px 0px;
        }

        p {
            padding: 20px 0px 40px 0px;
        }

        button {
            display: inline-block;
            font-weight: 400;
            text-align: center;
            white-space: nowrap;
            vertical-align: middle;
            cursor: pointer;
            user-select: none;
            border: 2px solid transparent;
            padding: 1rem 2rem;
            font-size: 1rem;
            line-height: 1.5;
            border-radius: 2px;
            color: #000;
            background-color: #a5e4d3;
            border-color: #a5e4d3;
            transition: all .2s ease-in-out 0s;
            font-size: 1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        button:hover {
            color: #fff;
            background-color: #000;
            border-color: #000;
        }
    }
}
</style>