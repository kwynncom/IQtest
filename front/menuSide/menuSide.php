<div class='rightMenuP10'>
	<div class='rightMenu' id='rightMenu'>
		
		<?php require_once('feedT.php'); ?>
		
				<ol>
			<?php	require_once(__DIR__ . '/../../config.php');
					$t = '';
					for($i=1; $i <= IQTestIntf::tasksn; $i++) {
						$t .= "<li class='menu'><a href='/t/23/04/IQ/front/loadTask.php?n=$i'>Task " . $i . '</a></li>' . "\n";
					}
					
					echo($t);
					
				?>
			
		</ol>
		
		<p><a href='report/report.php'>results</a></p>
		<p><a href='/t/23/04/IQ/extra/instructions.html'>directions</a></p>
		<p><a href='/t/23/04/IQ/'>IQ home</a></p>
		
	</div>
</div>
