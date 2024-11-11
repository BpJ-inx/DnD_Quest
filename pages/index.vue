<template>
  <div class="page-container">
    <div class="title-description">
      <h1 class="title">To Hell and Back Again</h1>
      <div class="description">
        <p class="intro-text">
          Одиночное приключение D&D 5e, написанное как приквел к официальной
          кампании Wizard of the Coast's
        </p>
        <p class="subtitle">"Descent to Avernus"</p>
      </div>
    </div>

    <div class="content-container">
      <div class="how-to-play">
        <p class="section-title">Как играть</p>
        <p class="section-description">
          To Hell and Back Again вдохновлена классическими интерактивными
          фантастическими сериями, где вам предлагается делать выбор, чтобы
          получить новый опыт. Это приключение позволяет вам отыгрывать роли в
          мирах фей и дьяволов, встречать фантастических друзей и ужасающих
          злодеев и оставлять свой след в Забытых Королевствах. Кости и ваш
          выбор определят результат, а аннотации к сценам помогут отслеживать
          прогресс.
        </p>
        <p class="section-description">
          Это приключение не требует Мастера Подземелий, но использует правила
          D&D 5-й редакции. Вы начнете с персонажем 1-го уровня, и для
          компенсации сложности вы можете установить его очки здоровья на
          максимум для его класса.
        </p>
        <p class="section-description">
          Книга игрока будет полезна для создания нового персонажа, не забудьте
          обратить внимание на чарты, классовые и расовые умения, способности и
          заклинания — они могут быть ключом к выживанию.
        </p>
      </div>

      <div class="destiny-points">
        <p class="section-title">Очки Судьбы</p>
        <p class="section-description">
          У каждого искателя приключений есть судьба. Очки Судьбы представляют
          собой повороты судьбы, которые позволяют искателям приключений быть
          героическими или избегать опасности, находясь на волоске от смерти. Вы
          начинаете свое путешествие с 5 очками Судьбы. Во время своих
          приключений вы можете выбрать, потратить ли очко Судьбы, чтобы
          преодолеть препятствие, автоматически преуспев в любом отдельном
          броске кубика (например, проверке способности или спасброске).
        </p>
        <p class="section-description">
          Вы также можете потратить очко Судьбы, чтобы пережить смерть, когда
          ваши очки здоровья снизятся до 0. Когда вы это делаете, вы не
          получаете бессознательное состояние; вместо этого немедленно бросьте
          3d6 и сбросьте ваши текущие очки здоровья до выпавшего числа.
          Некоторые встречи также будут отмечать, когда вы можете потратить очки
          Судьбы, чтобы убежать или иным образом пережить встречу
          нетрадиционными способами, и вы можете сделать это в любое время в
          течение своего хода.
        </p>
        <p class="section-description">
          Если в приключении указано, что вы теряете очко Судьбы, и у вас не
          осталось очков Судьбы, вы все равно можете продолжить игру.
        </p>
        <p class="section-description">
          Тратьте свои очки Судьбы с умом, поскольку они могут быть
          единственным, что может спасти вашу жизнь в сложной схватке.
          Количество очков Судьбы, которые у вас будут в конце приключения,
          окажет долгосрочное влияние на вашего персонажа, поскольку он навсегда
          изменится после своего путешествия.
        </p>
      </div>

      <div class="character">
        <p class="section-title">Характеристики вашего персонажа</p>
        <div class="stats">
          <div class="stat-group">
            <StatBox @update:stat="updateStat">СИЛА</StatBox>
            <StatBox @update:stat="updateStat">ЛОВКОСТЬ</StatBox>
            <StatBox @update:stat="updateStat">ТЕЛОСЛОЖЕНИЕ</StatBox>
          </div>
          <div class="stat-group">
            <StatBox @update:stat="updateStat">ИНТЕЛЛЕКТ</StatBox>
            <StatBox @update:stat="updateStat">МУДРОСТЬ</StatBox>
            <StatBox @update:stat="updateStat">ХАРИЗМА</StatBox>
          </div>
        </div>
        <div class="mt-5">
          <DestinyPointStar></DestinyPointStar>
        </div>
      </div>
    </div>

    <div class="footer">
      <button class="start-button" @click="startQuest(router)">Начать</button>
    </div>
  </div>
  <div class="flex text-sm mt-3">
    <p>P.S. Использован автоматический перевод.</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
canUseDestPoints.value = false;
</script>

<style lang="scss" scoped>
@import "/assets/css/indexStyle.css";
</style>
